const works = options => {
  return [
    {
      uid: 5155,
      seo: 'cliiq',
      active: 1,
      displayName: 'Cliiq',
      year: 2019,
      intro: 'Social network for creators',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      // iframe: 'https://seda-dataviz.surge.sh/',
      external: 'https://cliiq.com/',
      detail: require('./works/cliiq.js').default,
      // detail: require('./works/cliiq.hbs')(hbsOptions),
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 5154,
      seo: 'seda',
      active: 1,
      displayName: 'World economic development',
      year: 2016,
      intro: 'Interactive data visualisation',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      iframe: 'https://seda-dataviz.surge.sh/',
      external: 'https://seda-dataviz.surge.sh/',
      detail: require('./works/seda.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 5153,
      seo: 'the-hunt',
      active: 1,
      displayName: 'The hunt',
      year: 2016,
      intro: 'Octahedron hunted by lines',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      iframe: 'https://the-hunt.surge.sh/',
      external: 'https://the-hunt.surge.sh/',
      detail: require('./works/the-hunt.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 2803,
      seo: 'the-code-of-nature-3d',
      active: 1,
      displayName: 'The code of nature in 3D',
      year: 2017,
      intro: 'A study of autonomous agents',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      iframe:
        'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
      external:
        'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
      detail: require('./works/the-code-of-nature-3d.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 3277,
      seo: 'fan-beat',
      active: 1,
      displayName: 'Fan Beat',
      year: 2016,
      intro: 'Interactive installation for concerts',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      detail: require('./works/fan-beat.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 8742,
      seo: 'pride-prejudice',
      active: 1,
      displayName: 'Pride & Prejudice',
      year: 2016,
      intro: 'Looong interactive streamgraph',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      external: 'https://d1xso9gob5fu6y.cloudfront.net/',
      detail: require('./works/pride-prejudice.js').default,
      template: 'default' // can be 'base' or null (default is null)
    },
    {
      uid: 4001,
      seo: 'glabs',
      active: 1,
      displayName: 'The Guardian Labs',
      year: 2016,
      intro: 'Interactive pages for editorial content',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      detail: require('./works/glabs.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 4473,
      seo: 'the-airport-of-the-future',
      active: 1,
      displayName: 'The airport of the future',
      year: 2016,
      intro: 'Scroll based 2D animations',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      external:
        'https://labs.theguardian.com/2016/heathrow-airport-of-the-future/',
      detail: require('./works/the-airport-of-the-future.js').default,
      template: 'default' // can be 'default' or null (default is null)
    },
    {
      uid: 7344,
      seo: 'w152',
      active: 1,
      displayName: 'Industrial Facility w152',
      year: 2016,
      intro: 'Scroll based 2D animations',
      preview: 'preview.jpg',
      image: 'main.jpg',
      vimeoId: null,
      detail: require('./works/w152.js').default,
      template: 'default' // can be 'default' or null (default is null)
    }
  ]
}

export default works
