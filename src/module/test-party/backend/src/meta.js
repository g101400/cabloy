const require3 = require('require3');
const extend = require3('extend2');

module.exports = app => {
  const meta = {
  };
  if (app.meta.isTest || app.meta.isLocal) {
    // schemas
    const schemas = require('./config/validation/schemas.js')(app);
    // keywords
    const keywords = require('./config/validation/keywords.js')(app);
    // socketio
    const socketioTest = require('./config/socketio/test.js')(app);
    const staticDashboards = require('./config/static/dashboards.js')(app);
    // meta
    extend(true, meta, {
      base: {
        atoms: {
          party: {
            info: {
              bean: 'party',
              title: 'Party',
              tableName: 'testParty',
              tableNameModes: {
                default: 'testPartyView',
              },
            },
            actions: {
            },
            validator: 'party',
            search: {
              validator: 'partySearch',
            },
          },
        },
        functions: {
          createParty: {
            title: 'Create Party',
            scene: 'create',
            autoRight: 1,
            atomClassName: 'party',
            action: 'create',
            sorting: 1,
            menu: 1,
          },
          listParty: {
            title: 'Party List',
            scene: 'list',
            autoRight: 1,
            atomClassName: 'party',
            action: 'read',
            sorting: 1,
            menu: 1,
          },
          kitchenSink: {
            title: 'Kitchen-sink',
            scene: 'demonstration',
            actionPath: 'kitchen-sink/index',
            sorting: 1,
            menu: 1,
          },
          // widgets
          widgetSales: {
            title: 'Fruit Sales',
            component: 'widgetSales',
            menu: 3,
            public: 1,
          },
          widgetSalesLine: {
            title: 'Fruit Sales(Line Chart)',
            component: 'widgetSalesLine',
            menu: 3,
            public: 1,
          },
          widgetSalesPie: {
            title: 'Fruit Sales(Pie Chart)',
            component: 'widgetSalesPie',
            menu: 3,
            public: 1,
          },
          widgetSnapshot: {
            title: 'Snapshots',
            component: 'widgetSnapshot',
            menu: 3,
            public: 1,
          },
        },
        statics: {
          'a-dashboard.dashboard': {
            items: staticDashboards,
          },
        },
      },
      validation: {
        validators: {
          party: {
            schemas: 'party',
          },
          partySearch: {
            schemas: 'partySearch',
          },
          userTest: {
            schemas: 'settingsUser,settingsUserExtra',
          },
          instanceTest: {
            schemas: 'settingsInstance',
          },
          formTest: {
            schemas: 'formTest',
          },
          formCaptchaTest: {
            schemas: 'formCaptchaTest',
          },
          formMobileVerifyTest: {
            schemas: 'formMobileVerifyTest',
          },
        },
        keywords: {
          'x-languages': keywords.languages,
        },
        schemas: {
          party: schemas.party,
          partySearch: schemas.partySearch,
          settingsUser: schemas.settingsUser,
          settingsUserExtra: schemas.settingsUserExtra,
          settingsInstance: schemas.settingsInstance,
          formTest: schemas.formTest,
          formCaptchaTest: schemas.formCaptchaTest,
          formMobileVerifyTest: schemas.formMobileVerifyTest,
        },
      },
      settings: {
        user: {
          validator: 'userTest',
        },
        instance: {
          validator: 'instanceTest',
        },
      },
      index: {
        indexes: {
          testParty: 'createdAt,updatedAt,atomId,partyTypeId',
        },
      },
      socketio: {
        messages: {
          test: socketioTest,
        },
      },
    });
  }
  if (app.meta.isTest) {
    // meta
    extend(true, meta, {
      base: {
        atoms: {
          partyPublic: {
            info: {
              bean: 'partyPublic',
              tableName: 'testPartyPublic',
              public: 1,
            },
          },
        },
        functions: {
          testFunctionPublic: {
            scene: 'tools',
            menu: 1,
            public: 1,
          },
        },
      },
      event: {
        declarations: {
          hello: 'This is a test for event',
        },
        implementations: {
          'test-party:hello': 'helloEcho',
          'a-base:userVerify': 'userVerify',
          'a-base:loginInfo': 'loginInfo',
        },
      },
      sequence: {
        providers: {
          test: {
            bean: 'test',
            start: 0,
          },
        },
      },
    });
  }
  return meta;
};
