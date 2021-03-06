import React, { useRef, useEffect, useState, useContext } from 'react'
import { css, cx } from '@emotion/css'

import FullscreenIcon from './FullscreenIcon'

import SupportContext from '../../../../../context/SupportContext'

import createCover from '../../../../../utils/create-cover'
import onResize from '../../../../../utils/resize'

import C from '../../../../../const'

import DivImg from '../../../../shared/DivImg'
import LoadingAnimation from '../../../../shared/LoadingAnimation'

/**
 * Takes a video and a container and sets the size of the video as "cover" background in CSS.
 * @param {object} props
 */
export default function VideoCover ({ displayName, head }) {
  const {
    attrs,
    src,
    fallbackImg,
    originalVideoSize,
    allowFullscreen,
    loaderColor
  } = head
  const { width, height } = originalVideoSize

  const containerEl = useRef(null)
  const videoEl = useRef(null)

  const { canAutoplay } = useContext(SupportContext)
  const [sizes, setSizes] = useState(null)
  const [cover, setCover] = useState({
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  })
  const [windowSize, setWindowSize] = useState(null)
  const [fullscreen, setFullscreen] = useState(false)

  const videoReady = cover.height !== '100%'

  const videoVisibility = css`
    opacity: ${videoReady ? 1 : 0};
    transition-property: opacity;
    transition-duration: 0.6s;
  `

  // On window resize
  useEffect(() => {
    if (!C.isBrowser) return null
    const offResize = onResize(e => setWindowSize(e))
    return offResize
  }, [])

  // Get the size of the video and its container (needed to calculate the cover size and position)
  useEffect(() => {
    if (!containerEl.current || !videoEl.current) return

    const containerSize = containerEl.current.getBoundingClientRect()
    const videoSize = videoEl.current.getBoundingClientRect()

    if (videoSize.width === 0 || containerSize.width === 0) return

    setSizes({
      videoSize: { w: width || videoSize.width, h: height || videoSize.height },
      containerSize: { w: containerSize.width, h: containerSize.height }
    })
  }, [containerEl, videoEl, width, height, windowSize, fullscreen])

  // Calculates the cover once we know the dimension of video and container
  useEffect(() => {
    if (!sizes) return

    const { videoSize, containerSize } = sizes

    const cover = createCover(
      containerSize.w,
      containerSize.h,
      videoSize.w,
      videoSize.h
    )

    setCover(cover)
  }, [sizes])

  return (
    <div className={cx('head', fullscreen && 'fullscreen')}>
      <div className='shadow overlay abs-percent-fullscreen'></div>

      <div className='icons'>
        {allowFullscreen && (
          <FullscreenIcon
            setFullscreen={setFullscreen}
            fullscreen={fullscreen}
          />
        )}
      </div>

      <LoadingAnimation show={!videoReady} color={loaderColor} />

      {/* color='white' */}

      {canAutoplay && (
        <div ref={containerEl} className='video-container'>
          <video
            ref={videoEl}
            className={cx('video cover', videoVisibility)}
            autoPlay
            muted
            loop
            src={src}
            style={{
              ...cover
            }}
            {...attrs}
          ></video>
        </div>
      )}

      {canAutoplay || (
        <DivImg className='bg video-fallback' src={fallbackImg} />
      )}
    </div>
  )
}
