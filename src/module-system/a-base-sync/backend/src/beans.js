const versionManager = require('./bean/version.manager.js');
const localProcedure = require('./bean/local.procedure.js');
const broadcastAuthProviderChanged = require('./bean/broadcast.authProviderChanged.js');
const queueSchedule = require('./bean/queue.schedule.js');
const queueRoleBuild = require('./bean/queue.roleBuild.js');
const startupRegisterPassport = require('./bean/startup.registerPassport.js');
const startupInstallAuthProviders = require('./bean/startup.installAuthProviders.js');
const startupSetFunctionLocales = require('./bean/startup.setFunctionLocales.js');
const startupLoadSchedules = require('./bean/startup.loadSchedules.js');
const startupLoadAtomStatics = require('./bean/startup.loadAtomStatics.js');
const middlewareInner = require('./bean/middleware.inner.js');
const middlewareTest = require('./bean/middleware.test.js');
const middlewareTransaction = require('./bean/middleware.transaction.js');
const middlewareCors = require('./bean/middleware.cors.js');
const middlewareAuth = require('./bean/middleware.auth.js');
const middlewareRight = require('./bean/middleware.right.js');
const middlewareJsonp = require('./bean/middleware.jsonp.js');
const middlewareHttpLog = require('./bean/middleware.httpLog.js');
const beanAtom = require('./bean/bean.atom.js');
const beanAtomAction = require('./bean/bean.atomAction.js');
const beanAtomClass = require('./bean/bean.atomClass.js');
const beanAuth = require('./bean/bean.auth.js');
const beanBase = require('./bean/bean.base.js');
const beanFunction = require('./bean/bean.function.js');
const beanRole = require('./bean/bean.role.js');
const beanUser = require('./bean/bean.user.js');
const beanUtil = require('./bean/bean.util.js');
const beanCategory = require('./bean/bean.category.js');
const beanTag = require('./bean/bean.tag.js');

module.exports = app => {
  const beans = {
    // version
    'version.manager': {
      mode: 'app',
      bean: versionManager,
    },
    // local
    'local.procedure': {
      mode: 'ctx',
      bean: localProcedure,
    },
    // broadcast
    'broadcast.authProviderChanged': {
      mode: 'app',
      bean: broadcastAuthProviderChanged,
    },
    // queue
    'queue.schedule': {
      mode: 'app',
      bean: queueSchedule,
    },
    'queue.roleBuild': {
      mode: 'app',
      bean: queueRoleBuild,
    },
    // startup
    'startup.registerPassport': {
      mode: 'app',
      bean: startupRegisterPassport,
    },
    'startup.installAuthProviders': {
      mode: 'app',
      bean: startupInstallAuthProviders,
    },
    'startup.setFunctionLocales': {
      mode: 'app',
      bean: startupSetFunctionLocales,
    },
    'startup.loadSchedules': {
      mode: 'app',
      bean: startupLoadSchedules,
    },
    'startup.loadAtomStatics': {
      mode: 'app',
      bean: startupLoadAtomStatics,
    },
    // middleware
    'middleware.inner': {
      mode: 'ctx',
      bean: middlewareInner,
    },
    'middleware.test': {
      mode: 'ctx',
      bean: middlewareTest,
    },
    'middleware.transaction': {
      mode: 'ctx',
      bean: middlewareTransaction,
    },
    'middleware.cors': {
      mode: 'ctx',
      bean: middlewareCors,
    },
    'middleware.auth': {
      mode: 'ctx',
      bean: middlewareAuth,
    },
    'middleware.right': {
      mode: 'ctx',
      bean: middlewareRight,
    },
    'middleware.jsonp': {
      mode: 'ctx',
      bean: middlewareJsonp,
    },
    'middleware.httpLog': {
      mode: 'ctx',
      bean: middlewareHttpLog,
    },
    // global
    atom: {
      mode: 'ctx',
      bean: beanAtom,
      global: true,
    },
    atomAction: {
      mode: 'ctx',
      bean: beanAtomAction,
      global: true,
    },
    atomClass: {
      mode: 'ctx',
      bean: beanAtomClass,
      global: true,
    },
    auth: {
      mode: 'ctx',
      bean: beanAuth,
      global: true,
    },
    base: {
      mode: 'ctx',
      bean: beanBase,
      global: true,
    },
    function: {
      mode: 'ctx',
      bean: beanFunction,
      global: true,
    },
    role: {
      mode: 'ctx',
      bean: beanRole,
      global: true,
    },
    user: {
      mode: 'ctx',
      bean: beanUser,
      global: true,
    },
    util: {
      mode: 'ctx',
      bean: beanUtil,
      global: true,
    },
    category: {
      mode: 'ctx',
      bean: beanCategory,
      global: true,
    },
    tag: {
      mode: 'ctx',
      bean: beanTag,
      global: true,
    },
  };
  return beans;
};
