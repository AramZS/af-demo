let item = {
  template: {
    inputPath: './src/impact.md',
    parsed: {
      root: '',
      dir: './src',
      base: 'impact.md',
      ext: '.md',
      name: 'impact'
    },
    extraOutputSubdirectory: '',
    templateData: TemplateData {
      templateConfig: [TemplateConfig],
      config: [Object],
      benchmarks: [Object],
      rawImports: [Object],
      globalData: [Promise],
      templateDirectoryData: [Object],
      isEsm: false,
      initialGlobalData: [TemplateDataInitialGlobalData],
      _extensionMap: [EleventyExtensionMap],
      _env: [Object],
      fileSystemSearch: [FileSystemSearch],
      configApiGlobalData: [Promise],
      pathCache: [Array]
    },
    fileSlug: TemplateFileSlug {
      inputPath: 'impact.md',
      cleanInputPath: 'impact.md',
      dirs: [],
      parsed: [Object],
      filenameNoExt: 'impact'
    },
    fileSlugStr: 'impact',
    filePathStem: '/impact',
    linters: [],
    transforms: {
      '@11ty/eleventy-bundle': [Function: fn],
      '@11ty/eleventy/html-transformer': [Function: fn],
      '@11ty/eleventy-bundle/delayed': [Function: fn]
    },
    isVerbose: true,
    isDryRun: false,
    writeCount: 0,
    outputFormat: 'fs',
    behavior: TemplateBehavior {
      render: true,
      write: true,
      outputFormat: 'fs',
      config: [Object],
      renderableOverride: undefined
    },
    renderCount: 0,
    _dataCache: Promise { [Object] },
    inputContent: Promise {
      '---\n' +
        'permalink: /impact.html\n' +
        'path: /impact\n' +
        `title: "Alfalfa: the film's impact"\n` +
        "internalPageTypes: [ 'page', 'home' ]\n" +
        'layout: "page.11ty.js"\n' +
        '---\n' +
        '\n' +
        '<h2>Impact</h2>\n' +
        '\n' +
        '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n' +
        '\n' +
        '<div class="photo-collection">\n' +
        "{% photoset '645adccec1e0ecb039f5eeca1579cb44.webp,Alejandro Escamilla,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'A5AJ4BWI.jpg,Shyamanta Baruah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'GettyImages_1243579501.webp,Luke Chesser,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'imengine.prod.srp.navigacloud.jpg,Ilham Rahmansyah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'IMG_7521.jpeg,petradr,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' \n" +
        '%}\n' +
        '</div>\n' +
        '\n' +
        '<h3>Impact Team</h3>\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar malesuada massa a tincidunt. Praesent gravida egestas dui vel tristique. Praesent vel augue a nisl suscipit posuere ac nec ipsum.\n' +
        '\n' +
        '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n'
    },
    readingPromise: Promise { [Object] },
    _frontMatterDataCache: Promise { [Object] },
    _stats: Promise { [Stats] },
    _usePermalinkRoot: undefined
  },
  rawInput: '\n' +
    '<h2>Impact</h2>\n' +
    '\n' +
    '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n' +
    '\n' +
    '<div class="photo-collection">\n' +
    "{% photoset '645adccec1e0ecb039f5eeca1579cb44.webp,Alejandro Escamilla,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'A5AJ4BWI.jpg,Shyamanta Baruah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'GettyImages_1243579501.webp,Luke Chesser,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'imengine.prod.srp.navigacloud.jpg,Ilham Rahmansyah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'IMG_7521.jpeg,petradr,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' \n" +
    '%}\n' +
    '</div>\n' +
    '\n' +
    '<h3>Impact Team</h3>\n' +
    '\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar malesuada massa a tincidunt. Praesent gravida egestas dui vel tristique. Praesent vel augue a nisl suscipit posuere ac nec ipsum.\n' +
    '\n' +
    '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n',
  groupNumber: 0,
  data: {
    metadata: {
      username: 'Alfalfa',
      homeLabel: 'Alfalfa Film',
      homeUrl: 'https://alfalfafilm.com/',
      language: 'en-US'
    },
    site: {
      username: 'Alfalfa',
      title: 'Alfalfa',
      description: 'Alfalfa is about .',
      homeUrl: 'https://alfalfafilm.com/',
      language: 'en-US',
      metadata: [Object],
      lang: 'en-US',
      github: [Object],
      site_url: 'https://alfalfafilm.com',
      domain: 'https://alfalfafilm.com',
      defaultImage: 'https://alfalfafilm.com/assets/favicon.png',
      serviceWorkerVer: 'a765-f629-3aed-1784775762942',
      playOrder: 'ascending',
      nav: [Object]
    },
    eleventy: {
      version: '3.1.6',
      generator: 'Eleventy v3.1.6',
      env: [Object],
      directories: [Object]
    },
    pkg: {
      name: 'alfalfa',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      author: '',
      license: 'ISC',
      dependencies: [Object]
    },
    permalink: '/impact.html',
    path: '/impact',
    title: "Alfalfa: the film's impact",
    internalPageTypes: [ 'page', 'home' ],
    layout: 'page.11ty.js',
    page: {
      inputPath: './src/impact.md',
      fileSlug: 'impact',
      filePathStem: '/impact',
      outputFileExtension: 'html',
      templateSyntax: 'liquid,md',
      date: 2026-06-18T03:05:01.244Z,
      rawInput: '\n' +
        '<h2>Impact</h2>\n' +
        '\n' +
        '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n' +
        '\n' +
        '<div class="photo-collection">\n' +
        "{% photoset '645adccec1e0ecb039f5eeca1579cb44.webp,Alejandro Escamilla,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'A5AJ4BWI.jpg,Shyamanta Baruah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'GettyImages_1243579501.webp,Luke Chesser,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'imengine.prod.srp.navigacloud.jpg,Ilham Rahmansyah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'IMG_7521.jpeg,petradr,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' \n" +
        '%}\n' +
        '</div>\n' +
        '\n' +
        '<h3>Impact Team</h3>\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar malesuada massa a tincidunt. Praesent gravida egestas dui vel tristique. Praesent vel augue a nisl suscipit posuere ac nec ipsum.\n' +
        '\n' +
        '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n',
      url: '/impact.html',
      outputPath: './docs/impact.html'
    },
    collections: { tagList: [] }
  },
  page: {
    inputPath: './src/impact.md',
    fileSlug: 'impact',
    filePathStem: '/impact',
    outputFileExtension: 'html',
    templateSyntax: 'liquid,md',
    date: 2026-06-18T03:05:01.244Z,
    rawInput: '\n' +
      '<h2>Impact</h2>\n' +
      '\n' +
      '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n' +
      '\n' +
      '<div class="photo-collection">\n' +
      "{% photoset '645adccec1e0ecb039f5eeca1579cb44.webp,Alejandro Escamilla,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'A5AJ4BWI.jpg,Shyamanta Baruah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'GettyImages_1243579501.webp,Luke Chesser,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'imengine.prod.srp.navigacloud.jpg,Ilham Rahmansyah,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' 'IMG_7521.jpeg,petradr,Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!' \n" +
      '%}\n' +
      '</div>\n' +
      '\n' +
      '<h3>Impact Team</h3>\n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar malesuada massa a tincidunt. Praesent gravida egestas dui vel tristique. Praesent vel augue a nisl suscipit posuere ac nec ipsum.\n' +
      '\n' +
      '<video src="/assets/Rev-Yearwood-5-26-26-small.webm" controls></video>\n',
    url: '/impact.html',
    outputPath: './docs/impact.html'
  },
  inputPath: './src/impact.md',
  fileSlug: 'impact',
  filePathStem: '/impact',
  date: 2026-06-18T03:05:01.244Z,
  outputPath: './docs/impact.html',
  url: '/impact.html',
  templateContent: [Getter/Setter],
  content: [Getter/Setter]
};
