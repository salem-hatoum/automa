export const tasks = {
  trigger: {
    name: 'Trigger',
    description: 'Block where workflow will start executing',
    icon: 'riFlashlightLine',
    component: 'BlockBasic',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 0,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      description: '',
      type: 'manual',
      interval: 60,
      delay: 5,
      date: '',
      time: '00:00',
      url: '',
      shortcut: '',
      activeInInput: false,
      isUrlRegex: false,
      days: [],
      contextMenuName: '',
      contextTypes: [],
      parameters: [],
      observeElement: {
        selector: '',
        baseSelector: '',
        matchPattern: '',
        targetOptions: {
          subtree: false,
          childList: true,
          attributes: false,
          attributeFilter: [],
          characterData: false,
        },
        baseElOptions: {
          subtree: false,
          childList: true,
          attributes: false,
          attributeFilter: [],
          characterData: false,
        },
      },
    },
  },
  'execute-workflow': {
    name: 'Execute workflow',
    description: '',
    icon: 'riFlowChart',
    component: 'BlockBasic',
    category: 'general',
    editComponent: 'EditExecuteWorkflow',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['globalData'],
    data: {
      disableBlock: false,
      executeId: '',
      workflowId: '',
      globalData: '',
      description: '',
      insertAllVars: false,
    },
  },
  'active-tab': {
    name: 'Active tab',
    description: "Set current tab that you're in as an active tab",
    icon: 'riWindowLine',
    component: 'BlockBasic',
    category: 'browser',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
    },
  },
  'new-tab': {
    name: 'New tab',
    description: 'Create a new tab',
    icon: 'riGlobalLine',
    component: 'BlockBasic',
    editComponent: 'EditNewTab',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url', 'userAgent'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      userAgent: '',
      active: true,
      inGroup: false,
      waitTabLoaded: false,
      updatePrevTab: false,
      customUserAgent: false,
    },
  },
  'switch-tab': {
    name: 'Switch tab',
    description: 'Switch active tab',
    icon: 'riArrowLeftRightLine',
    component: 'BlockBasic',
    editComponent: 'EditSwitchTab',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url', 'matchPattern'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      tabIndex: 0,
      matchPattern: '',
      activeTab: true,
      createIfNoMatch: false,
      findTabBy: 'match-patterns',
    },
  },
  'new-window': {
    name: 'New window',
    description: 'Create a new window',
    icon: 'riWindow2Line',
    component: 'BlockBasic',
    editComponent: 'EditNewWindow',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      description: '',
      top: 0,
      left: 0,
      width: 0,
      url: '',
      height: 0,
      type: 'normal',
      incognito: false,
      windowState: 'normal',
    },
  },
  proxy: {
    name: 'Proxy',
    description: 'Set the proxy of the browser',
    icon: 'riShieldKeyholeLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditProxy',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    refDataKeys: ['host', 'port', 'scheme'],
    data: {
      description: '',
      disableBlock: false,
      scheme: 'https',
      host: '',
      port: 443,
      bypassList: '',
      clearProxy: false,
    },
  },
  'go-back': {
    name: 'Go back',
    description: 'Go back to the previous page',
    icon: 'riArrowGoBackLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {
      disableBlock: false,
    },
  },
  'forward-page': {
    name: 'Go forward',
    description: 'Go forward to the next page',
    icon: 'riArrowGoForwardLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {
      disableBlock: false,
    },
  },
  'close-tab': {
    name: 'Close tab/window',
    icon: 'riCloseCircleLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditCloseTab',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      url: '',
      description: '',
      activeTab: true,
      closeType: 'tab',
      allWindows: false,
    },
  },
  'take-screenshot': {
    name: 'Take screenshot',
    description: 'Take a screenshot of current active tab',
    icon: 'riImageLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditTakeScreenshot',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    refDataKeys: ['fileName'],
    autocomplete: ['variableName'],
    data: {
      description: '',
      disableBlock: false,
      fileName: '',
      ext: 'png',
      quality: 100,
      dataColumn: '',
      variableName: '',
      selector: '',
      fullPage: false,
      saveToColumn: false,
      saveToComputer: true,
      assignVariable: false,
      captureActiveTab: true,
    },
  },
  'browser-event': {
    name: 'Browser event',
    description: 'Wait until the selected event is triggered',
    icon: 'riLightbulbLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditBrowserEvent',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      disableBlock: false,
      description: '',
      timeout: 10000,
      eventName: 'tab:loaded',
      setAsActiveTab: true,
      activeTabLoaded: true,
      tabLoadedUrl: '',
      tabUrl: '',
      fileQuery: '',
    },
  },
  'event-click': {
    name: 'Click element',
    icon: 'riCursorLine',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
    },
  },
  delay: {
    name: 'Delay',
    description: 'Add delay before executing the next block',
    icon: 'riTimerLine',
    component: 'BlockDelay',
    editComponent: 'EditDelay',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['time'],
    data: {
      disableBlock: false,
      time: 500,
    },
  },
  'get-text': {
    name: 'Get text',
    description: 'Get text from an element',
    icon: 'riParagraph',
    component: 'BlockBasic',
    editComponent: 'EditGetText',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'prefixText', 'suffixText', 'extraRowValue'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      regex: '',
      prefixText: '',
      suffixText: '',
      regexExp: ['g'],
      dataColumn: '',
      saveData: true,
      includeTags: false,
      addExtraRow: false,
      assignVariable: false,
      useTextContent: false,
      variableName: '',
      extraRowValue: '',
      extraRowDataColumn: '',
    },
  },
  'export-data': {
    name: 'Export data',
    icon: 'riDownloadLine',
    component: 'BlockBasic',
    editComponent: 'EditExportData',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['name'],
    data: {
      disableBlock: false,
      name: '',
      refKey: '',
      type: 'json',
      description: '',
      variableName: '',
      csvDelimiter: ',',
      addBOMHeader: true,
      onConflict: 'uniquify',
      dataToExport: 'data-columns',
    },
  },
  'element-scroll': {
    name: 'Scroll element',
    icon: 'riMouseLine',
    component: 'BlockBasic',
    editComponent: 'EditScrollElement',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: 'html',
      markEl: false,
      multiple: false,
      scrollY: 0,
      scrollX: 0,
      incX: false,
      incY: false,
      smooth: false,
      scrollIntoView: false,
    },
  },
  link: {
    name: 'Link',
    description: 'Open link element',
    icon: 'riLink',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      disableMultiple: true,
    },
  },
  'attribute-value': {
    name: 'Attribute value',
    description: 'Get attribute value of an element',
    icon: 'riBracketsLine',
    component: 'BlockBasic',
    editComponent: 'EditAttributeValue',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'attributeName', 'extraRowValue'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      attributeName: '',
      assignVariable: false,
      variableName: '',
      dataColumn: '',
      saveData: true,
      addExtraRow: false,
      extraRowValue: '',
      extraRowDataColumn: '',
    },
  },
  forms: {
    name: 'Forms',
    icon: 'riInputCursorMove',
    description: 'Manipulate form(input, select, checkbox, and radio) element',
    component: 'BlockBasic',
    editComponent: 'EditForms',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'value', 'optionPosition'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      selected: true,
      clearValue: true,
      getValue: false,
      saveData: false,
      dataColumn: '',
      selectOptionBy: 'value',
      optionPosition: '1',
      assignVariable: false,
      variableName: '',
      type: 'text-field',
      value: '',
      delay: 0,
      events: [],
    },
  },
  'repeat-task': {
    name: 'Repeat task',
    icon: 'riRepeat2Line',
    component: 'BlockRepeatTask',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['repeatFor'],
    data: {
      disableBlock: false,
      repeatFor: '1',
    },
  },
  'javascript-code': {
    name: 'JavaScript code',
    description: 'Execute your custom javascript code in a webpage',
    icon: 'riCodeSSlashLine',
    component: 'BlockBasic',
    editComponent: 'EditJavascriptCode',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      timeout: 20000,
      code: 'console.log("Hello world!");\nautomaNextBlock()',
      preloadScripts: [],
      everyNewTab: false,
      runBeforeLoad: false,
    },
  },
  'trigger-event': {
    name: 'Trigger event',
    description: 'Trigger event',
    icon: 'riLightbulbFlashLine',
    component: 'BlockBasic',
    editComponent: 'EditTriggerEvent',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'eventParams.clientX', 'eventParams.clientY'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: 'html',
      markEl: false,
      multiple: false,
      eventName: '',
      eventType: '',
      eventParams: { bubbles: true, cancelable: false },
    },
  },
  'google-sheets': {
    name: 'Google sheets',
    description: 'Read Google Sheets data',
    icon: 'mdiGoogleSheet',
    component: 'BlockBasic',
    editComponent: 'EditGoogleSheets',
    category: 'onlineServices',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['customData', 'range', 'spreadsheetId'],
    autocomplete: ['refKey'],
    data: {
      disableBlock: false,
      range: '',
      refKey: '',
      type: 'get',
      customData: '',
      description: '',
      spreadsheetId: '',
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
      firstRowAsKey: false,
      keysAsFirstRow: true,
      valueInputOption: 'RAW',
      InsertDataOption: 'INSERT_ROWS',
      dataFrom: 'data-columns',
    },
  },
  conditions: {
    name: 'Conditions',
    description: 'Conditional block',
    icon: 'riAB',
    component: 'BlockConditions',
    editComponent: 'EditConditions',
    category: 'conditions',
    inputs: 1,
    outputs: 0,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      disableBlock: false,
      conditions: [],
      retryConditions: false,
      retryCount: 10,
      retryTimeout: 1000,
    },
  },
  'element-exists': {
    name: 'Element exists',
    description: 'Check if an element is exists',
    icon: 'riFocus3Line',
    component: 'BlockElementExists',
    editComponent: 'EditElementExists',
    category: 'conditions',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      selector: '',
      tryCount: 1,
      timeout: 500,
      markEl: false,
      throwError: false,
    },
  },
  webhook: {
    name: 'HTTP Request',
    description: 'make an HTTP request',
    icon: 'riEarthLine',
    component: 'BlockBasicWithFallback',
    editComponent: 'EditWebhook',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['body', 'url'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      body: '{}',
      headers: [],
      method: 'POST',
      timeout: 10000,
      dataPath: '',
      contentType: 'json',
      variableName: '',
      assignVariable: false,
      saveData: false,
      dataColumn: '',
      responseType: 'json',
    },
  },
  'while-loop': {
    name: 'While loop',
    description: 'Execute blocks while the condition is met',
    icon: 'riRefreshFill',
    component: 'BlockBasicWithFallback',
    editComponent: 'EditWhileLoop',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      conditions: null,
    },
  },
  'loop-data': {
    name: 'Loop data',
    icon: 'riRefreshLine',
    component: 'BlockBasic',
    editComponent: 'EditLoopData',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: [
      'maxLoop',
      'loopData',
      'variableName',
      'referenceKey',
      'elementSelector',
    ],
    autocomplete: ['variableName', 'loopId'],
    data: {
      disableBlock: false,
      loopId: '',
      maxLoop: 0,
      toNumber: 10,
      fromNumber: 1,
      startIndex: 0,
      loopData: '[]',
      description: '',
      variableName: '',
      referenceKey: '',
      reverseLoop: false,
      elementSelector: '',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      resumeLastWorkflow: false,
      loopThrough: 'data-columns',
    },
  },
  'loop-breakpoint': {
    name: 'Loop breakpoint',
    description: 'To tell where loop data must stop',
    icon: 'riStopLine',
    component: 'BlockLoopBreakpoint',
    category: 'general',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      loopId: '',
      clearLoop: false,
    },
  },
  'blocks-group': {
    name: 'Blocks group',
    description: 'Grouping blocks',
    icon: 'riFolderZipLine',
    component: 'BlockGroup',
    category: 'general',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      name: '',
      blocks: [],
    },
  },
  // 'blocks-group-2': {
  //   name: 'Blocks group',
  //   description: 'Grouping blocks',
  //   icon: 'riFolderZipLine',
  //   component: 'BlockGroup2',
  //   category: 'general',
  //   disableEdit: true,
  //   inputs: 1,
  //   outputs: 1,
  //   allowedInputs: true,
  //   maxConnection: 1,
  //   data: {
  //     disableBlock: false,
  //     name: '',
  //     width: 400,
  //     height: 300,
  //     borderColor: '#2563eb',
  //     backgroundColor: 'rgb(37, 99, 235, 0.3)',
  //   },
  // },
  clipboard: {
    name: 'Clipboard',
    description: 'Get the copied text from the clipboard',
    icon: 'riClipboardLine',
    component: 'BlockBasic',
    category: 'general',
    editComponent: 'EditClipboard',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    autocomplete: ['variableName'],
    refDataKeys: ['dataToCopy'],
    data: {
      disableBlock: false,
      description: '',
      type: 'get',
      assignVariable: false,
      variableName: '',
      saveData: true,
      dataColumn: '',
      dataToCopy: '',
      copySelectedText: false,
    },
  },
  'insert-data': {
    name: 'Insert data',
    description: 'Insert data into table or variable',
    icon: 'riDatabase2Line',
    component: 'BlockBasic',
    category: 'data',
    editComponent: 'EditInsertData',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      dataList: [],
    },
  },
  'switch-to': {
    name: 'Switch frame',
    description: 'Switch between main window and iframe',
    icon: 'riArrowUpDownLine',
    component: 'BlockBasic',
    editComponent: 'EditSwitchTo',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      findBy: 'cssSelector',
      selector: '',
      windowType: 'main-window',
    },
  },
  'upload-file': {
    name: 'Upload file',
    description: 'Upload file into <input type="file"> element',
    icon: 'riFileUploadLine',
    component: 'BlockBasic',
    editComponent: 'EditUploadFile',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'filePaths'],
    data: {
      disableBlock: false,
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      filePaths: [],
    },
  },
  'hover-element': {
    name: 'Hover element',
    description: 'Hover over an element',
    icon: 'mdiCursorDefaultClickOutline',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
    },
  },
  'save-assets': {
    name: 'Save assets',
    description:
      'Save assets (image, video, audio, or file) from an element or URL',
    icon: 'riImageLine',
    component: 'BlockBasic',
    editComponent: 'EditSaveAssets',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'url', 'filename'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      type: 'element',
      url: '',
      filename: '',
      onConflict: 'uniquify',
    },
  },
  'press-key': {
    name: 'Press key',
    description: 'Press a key or a combination',
    icon: 'riKeyboardLine',
    component: 'BlockBasic',
    editComponent: 'EditPressKey',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'keys'],
    data: {
      disableBlock: false,
      keys: '',
      selector: '',
      description: '',
    },
  },
  'handle-dialog': {
    name: 'Handle dialog',
    description:
      'Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).',
    icon: 'riChat3Line',
    component: 'BlockBasic',
    editComponent: 'EditHandleDialog',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['promptText'],
    data: {
      disableBlock: false,
      description: '',
      accept: true,
      promptText: '',
    },
  },
  'handle-download': {
    name: 'Handle download',
    description: 'Handle downloaded file',
    icon: 'riFileDownloadLine',
    component: 'BlockBasic',
    editComponent: 'EditHandleDownload',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['filename'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      filename: '',
      timeout: 20000,
      onConflict: 'uniquify',
      waitForDownload: true,
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
    },
  },
  'reload-tab': {
    name: 'Reload tab',
    description: 'Reload the active tab',
    icon: 'riRestartLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    disableEdit: true,
    data: {
      disableBlock: false,
    },
  },
  'delete-data': {
    name: 'Delete data',
    description: 'Delete table or variable data',
    icon: 'riDeleteBin7Line',
    editComponent: 'EditDeleteData',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      deleteList: [],
    },
  },
  'wait-connections': {
    name: 'Wait connections',
    description: 'Wait for all connections before continuing to the next block',
    icon: 'riTimerFlashLine',
    editComponent: 'EditWaitConnections',
    component: 'BlockBasic',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      timeout: 10000,
      specificFlow: false,
      flowBlockId: '',
    },
  },
  notification: {
    name: 'Notification',
    description: 'Display a notification',
    icon: 'riNotification3Line',
    editComponent: 'EditNotification',
    component: 'BlockBasic',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['message', 'title', 'iconUrl', 'imageUrl'],
    data: {
      disableBlock: false,
      description: '',
      message: '',
      iconUrl: '',
      imageUrl: '',
      title: 'Hello world!',
    },
  },
  'log-data': {
    name: 'Get log data',
    description: 'Get the latest log data of a workflow',
    icon: 'riFileHistoryLine',
    editComponent: 'EditLogData',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      workflowId: '',
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
    },
  },
  'tab-url': {
    name: 'Get tab URL',
    description: 'Get the tab URL',
    icon: 'riLinksLine',
    editComponent: 'EditTabURL',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      type: 'active-tab',
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
    },
  },
  'slice-variable': {
    name: 'Slice variable',
    description: 'Extracts a section of a variable value',
    icon: 'riSliceLine',
    editComponent: 'EditSliceVariable',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      endIdxEnabled: false,
      startIdxEnabled: true,
      endIndex: 0,
      startIndex: 0,
      variableName: '',
    },
  },
  'increase-variable': {
    name: 'Increase variable',
    description: 'Increase the value of a variable by specific amount',
    icon: 'riIncreaseDecreaseLine',
    editComponent: 'EditIncreaseVariable',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      increaseBy: 1,
      variableName: '',
    },
  },
  'regex-variable': {
    name: 'RegEx variable',
    description: 'Matching a variable value against a regular expression',
    icon: 'mdiRegex',
    editComponent: 'EditRegexVariable',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['replaceVal'],
    data: {
      disableBlock: false,
      method: 'match',
      replaceVal: '',
      description: '',
      expression: '',
      flag: [],
    },
  },
  'data-mapping': {
    name: 'Data mapping',
    description: 'Map data of a variable or table',
    icon: 'riMindMap',
    editComponent: 'EditDataMapping',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      dataSource: 'table',
      sources: [],
      varSourceName: '',
      dataColumn: '',
      saveData: false,
      assignVariable: false,
      variableName: '',
    },
  },
  'sort-data': {
    name: 'Sort data',
    description: 'Sort the items of data',
    icon: 'riSortAsc',
    editComponent: 'EditSortData',
    component: 'BlockBasic',
    category: 'data',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      sortByProperty: false,
      itemProperties: [],
      dataSource: 'table',
      varSourceName: '',
      dataColumn: '',
      saveData: false,
      assignVariable: false,
      variableName: '',
    },
  },
  'create-element': {
    name: 'Create element',
    description: 'Create an element and insert it into the page',
    icon: 'riHtml5Line',
    editComponent: 'EditCreateElement',
    component: 'BlockBasic',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['html', 'css'],
    data: {
      disableBlock: false,
      description: '',
      javascript: '',
      html: '',
      css: '',
      preloadScripts: [],
      findBy: 'cssSelector',
      insertAt: 'after',
      runBeforeLoad: false,
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: 'body',
    },
  },
  cookie: {
    name: 'Cookie',
    description: 'Get, set, or remove cookies',
    icon: 'mdiCookieOutline',
    editComponent: 'EditCookie',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: [
      'domain',
      'expirationDate',
      'path',
      'sameSite',
      'name',
      'url',
      'value',
    ],
    data: {
      disableBlock: false,
      description: '',
      type: 'get',
      getAll: false,
      domain: '',
      expirationDate: '',
      path: '',
      sameSite: '',
      name: '',
      url: '',
      value: '',
      httpOnly: false,
      secure: false,
      session: false,
      assignVariable: false,
      variableName: '',
      saveData: true,
      dataColumn: '',
    },
  },
  'block-package': {
    name: 'Block package',
    description: 'Block package',
    icon: 'riHtml5Line',
    editComponent: 'EditPackage',
    component: 'BlockPackage',
    category: 'package',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {},
  },
  note: {
    name: 'Note',
    description: '',
    icon: 'riFileEditLine',
    component: 'BlockNote',
    category: 'general',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      note: '',
      drawing: false,
      width: 280,
      height: 168,
      color: 'white',
      fontSize: 'regular',
    },
  },
  'workflow-state': {
    name: 'Workflow State',
    description: 'Manage workflows states',
    icon: 'riSettings3Line',
    component: 'BlockBasic',
    editComponent: 'EditWorkflowState',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      type: 'stop-current',
      exceptCurrent: false,
      workflowsToStop: [],
    },
  },
};

export const categories = {
  interaction: {
    name: 'Web interaction',
    border: 'border-green-200 dark:border-green-300',
    color: 'bg-green-200 dark:bg-green-300 fill-green-200 dark:fill-green-300',
  },
  browser: {
    name: 'Browser',
    border: 'border-orange-200 dark:border-orange-300',
    color:
      'bg-orange-200 dark:bg-orange-300 fill-orange-200 dark:fill-orange-300',
  },
  general: {
    name: 'General',
    border: 'border-yellow-200 dark:border-yellow-300',
    color:
      'bg-yellow-200 dark:bg-yellow-300 fill-yellow-200 dark:fill-yellow-300',
  },
  onlineServices: {
    name: 'Online services',
    border: 'border-red-200 dark:border-red-300',
    color: 'bg-red-200 dark:bg-red-300 fill-red-200 dark:fill-red-300',
  },
  data: {
    name: 'Data',
    border: 'border-lime-200 dark:border-lime-300',
    color: 'bg-lime-200 dark:bg-lime-300 fill-lime-200 dark:fill-lime-300',
  },
  conditions: {
    name: 'Conditions',
    border: 'border-blue-200 dark:border-blue-300',
    color: 'bg-blue-200 dark:bg-blue-300 fill-blue-200 dark:fill-blue-300',
  },
  package: {
    name: 'Packages',
    border: 'border-cyan-200 dark:border-cyan-300',
    color: 'bg-cyan-200 dark:bg-cyan-300 fill-cyan-200 dark:fill-cyan-300',
  },
};

export const tagColors = {
  stage: 'bg-yellow-200 dark:bg-yellow-300',
  production: 'bg-green-200 dark:bg-green-300',
};

export const eventList = [
  { id: 'click', name: 'Click', type: 'mouse-event' },
  { id: 'dblclick', name: 'Double Click', type: 'mouse-event' },
  { id: 'mouseup', name: 'Mouseup', type: 'mouse-event' },
  { id: 'mousedown', name: 'Mousedown', type: 'mouse-event' },
  { id: 'mouseenter', name: 'Mouseenter', type: 'mouse-event' },
  { id: 'mouseleave', name: 'Mouseleave', type: 'mouse-event' },
  { id: 'mouseover', name: 'Mouseover', type: 'mouse-event' },
  { id: 'mouseout', name: 'Mouseout', type: 'mouse-event' },
  { id: 'mousemove', name: 'Mousemove', type: 'mouse-event' },
  { id: 'focus', name: 'Focus', type: 'focus-event' },
  { id: 'blur', name: 'Blur', type: 'focus-event' },
  { id: 'input', name: 'Input', type: 'input-event' },
  { id: 'change', name: 'Change', type: 'event' },
  { id: 'touchstart', name: 'Touch start', type: 'touch-event' },
  { id: 'touchend', name: 'Touch end', type: 'touch-event' },
  { id: 'touchmove', name: 'Touch move', type: 'touch-event' },
  { id: 'touchcancel', name: 'Touch cancel', type: 'touch-event' },
  { id: 'keydown', name: 'Keydown', type: 'keyboard-event' },
  { id: 'keyup', name: 'Keyup', type: 'keyboard-event' },
  { id: 'submit', name: 'Submit', type: 'submit-event' },
  { id: 'wheel', name: 'Wheel', type: 'wheel-event' },
];

export const dataExportTypes = [
  { name: 'JSON', id: 'json' },
  { name: 'CSV', id: 'csv' },
  { name: 'Plain text', id: 'plain-text' },
];

export const workflowCategories = {
  scrape: 'Scraping',
  automation: 'Automation',
  productivity: 'Productivity',
};

export const excludeOnError = [
  'note',
  'delay',
  'webhook',
  'trigger',
  'while-loop',
  'conditions',
  'block-package',
  'element-exists',
];

export const contentTypes = [
  { name: 'application/json', value: 'json' },
  { name: 'multipart/form-data', value: 'form-data' },
  { name: 'application/x-www-form-urlencoded', value: 'form' },
];

export const supportLocales = [
  { id: 'en', name: 'English' },
  { id: 'zh', name: '简体中文' },
  { id: 'zh-tw', name: '繁體中文' },
  { id: 'vi', name: 'Tiếng Việt' },
  { id: 'fr', name: 'Français' },
];

export const communities = [
  {
    name: 'GitHub',
    icon: 'riGithubFill',
    url: 'https://github.com/kholid060/automa',
  },
  {
    name: 'Twitter',
    icon: 'riTwitterLine',
    url: 'https://twitter.com/AutomaApp',
  },
  {
    name: 'Discord',
    icon: 'riDiscordLine',
    url: 'https://discord.gg/C6khwwTE84',
  },
  {
    name: 'YouTube',
    icon: 'riYoutubeLine',
    url: 'https://www.youtube.com/channel/UCL3qU64hW0fsIj2vOayOQUQ',
  },
];

export const elementsHighlightData = {
  selectedElements: {
    stroke: '#2563EB',
    activeStroke: '#f87171',
    fill: 'rgba(37, 99, 235, 0.1)',
    activeFill: 'rgba(248, 113, 113, 0.1)',
  },
  hoveredElements: {
    stroke: '#fbbf24',
    fill: 'rgba(251, 191, 36, 0.1)',
  },
};

export const excludeGroupBlocks = [
  'trigger',
  'repeat-task',
  'loop-data',
  'loop-breakpoint',
  'blocks-group',
  'conditions',
  'webhook',
  'element-exists',
  'while-loop',
  'block-package',
];

export const conditionBuilder = {
  valueTypes: [
    {
      id: 'value',
      category: 'value',
      name: 'Value',
      compareable: true,
      data: { value: '' },
    },
    {
      id: 'code',
      category: 'value',
      name: 'Code',
      compareable: false,
      data: { code: '\nreturn true;' },
    },
    {
      id: 'element#text',
      category: 'element',
      name: 'Element text',
      compareable: true,
      data: { selector: '' },
    },
    {
      id: 'element#exists',
      category: 'element',
      name: 'Element exists',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#notExists',
      category: 'element',
      name: 'Element not exists',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#visible',
      category: 'element',
      name: 'Element visible',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#visibleScreen',
      category: 'element',
      name: 'Element visible in screen',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#invisible',
      category: 'element',
      name: 'Element hidden in screen',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#attribute',
      category: 'element',
      name: 'Element attribute value',
      compareable: true,
      data: { selector: '', attrName: '' },
    },
  ],
  compareTypes: [
    { id: 'eq', name: 'Equals', needValue: true, category: 'basic' },
    {
      id: 'eqi',
      name: 'Equals (case insensitive)',
      needValue: true,
      category: 'basic',
    },
    { id: 'nq', name: 'Not equals', needValue: true, category: 'basic' },
    { id: 'gt', name: 'Greater than', needValue: true, category: 'number' },
    {
      id: 'gte',
      name: 'Greater than or equal',
      needValue: true,
      category: 'number',
    },
    { id: 'lt', name: 'Less than', needValue: true, category: 'number' },
    {
      id: 'lte',
      name: 'Less than or equal',
      needValue: true,
      category: 'number',
    },
    { id: 'cnt', name: 'Contains', needValue: true, category: 'text' },
    {
      id: 'cni',
      name: 'Contains (case insensitive)',
      needValue: true,
      category: 'text',
    },
    { id: 'nct', name: 'Not contains', needValue: true, category: 'text' },
    {
      id: 'nci',
      name: 'Not contains (case insensitive)',
      needValue: true,
      category: 'text',
    },
    { id: 'stw', name: 'Starts with', needValue: true, category: 'text' },
    { id: 'enw', name: 'Ends with', needValue: true, category: 'text' },
    { id: 'rgx', name: 'Match with RegEx', needValue: true, category: 'text' },
    { id: 'itr', name: 'Is truthy', needValue: false, category: 'boolean' },
    { id: 'ifl', name: 'Is falsy', needValue: false, category: 'boolean' },
  ],
  inputTypes: {
    selector: {
      placeholder: '.class',
      label: 'CSS selector or XPath',
    },
    value: {
      label: 'Value',
      placeholder: 'abc123',
    },
    attrName: {
      label: 'Attribute name',
      placeholder: 'name',
    },
  },
};
