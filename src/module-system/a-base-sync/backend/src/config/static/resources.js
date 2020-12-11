module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const resources = [
    // function
    {
      atomName: 'Delete Comment',
      atomStaticKey: 'deleteComment',
      atomRevision: 0,
      atomCategoryId: 'a-base:function.Tools',
      resourceType: 'a-base:function',
      resourceConfig: null,
      resourceRoles: 'template.system',
    },
    // menu
    {
      atomName: 'Create Resource',
      atomStaticKey: 'createResource',
      atomRevision: 0,
      atomCategoryId: 'a-base:menu.Create',
      resourceType: 'a-base:menu',
      resourceConfig: JSON.stringify({
        module: moduleInfo.relativeName,
        atomClassName: 'resource',
        atomAction: 'create',
      }),
      resourceRoles: 'template.system',
    },
    {
      atomName: 'Resource List',
      atomStaticKey: 'listResource',
      atomRevision: 0,
      atomCategoryId: 'a-base:menu.List',
      resourceType: 'a-base:menu',
      resourceConfig: JSON.stringify({
        module: moduleInfo.relativeName,
        atomClassName: 'resource',
        atomAction: 'read',
      }),
      resourceRoles: 'template.system',
    },
    {
      atomName: 'Comment List',
      atomStaticKey: 'listComment',
      atomRevision: 0,
      atomCategoryId: 'a-base:menu.Tools',
      resourceType: 'a-base:menu',
      resourceConfig: JSON.stringify({
        actionPath: '/a/basefront/comment/all',
      }),
      resourceRoles: 'root',
    },
    // mine
    {
      atomName: 'Drafts',
      atomStaticKey: 'mineDrafts',
      atomRevision: 0,
      atomCategoryId: 'a-base:mine.Atom',
      resourceType: 'a-base:mine',
      resourceConfig: JSON.stringify({
        actionPath: '/a/basefront/comment/all',
      }),
      resourceRoles: 'root',
    },
  ];
  return resources;
};
