export default {
  methods: {
    renderProperties(c, context) {
      const { data, properties, pathParent } = context;
      const children = [];
      let domGroupFlattenChildren = null;
      let domGroupFlattenkey = null;
      let domGroupFlattenProperty = null;
      const _closeGroup = () => {
        // title
        const groupTitle = c('f7-list-item', {
          attrs: {
            groupTitle: true,
            title: this.getTitle({
              key: domGroupFlattenkey,
              property: domGroupFlattenProperty,
            }),
          },
        });
        // combine
        domGroupFlattenChildren.unshift(groupTitle);
        // group
        const className = domGroupFlattenProperty.ebGroupWhole ? 'eb-list-group-whole' : 'eb-list-group';
        const item = c('f7-list-group', {
          staticClass: className,
        }, domGroupFlattenChildren);
        // clear
        domGroupFlattenChildren = null;
        domGroupFlattenkey = null;
        domGroupFlattenProperty = null;
        return item;
      };
      for (const key in properties) {
        const property = properties[key];
        const bGroup = property.ebType === 'group';
        const bGroupFlatten = property.ebType === 'group-flatten';
        if ((bGroup || bGroupFlatten) && domGroupFlattenChildren) {
          // close previous group
          children.push(_closeGroup());
        }
        if (bGroupFlatten) {
          // open new group
          domGroupFlattenChildren = [];
          domGroupFlattenkey = key;
          domGroupFlattenProperty = property;
        } else {
          // others
          // context
          const context2 = {
            data,
            pathParent,
            schema: context.schema,
            properties,
            key,
          };
          context2.property = context2.properties[context2.key];
          context2.dataPath = context2.pathParent + context2.key;
          // render
          const item = this._renderItem(c, context2);
          if (item) {
            if (domGroupFlattenChildren) {
              domGroupFlattenChildren.push(item);
            } else {
              children.push(item);
            }
          }
        }
      }
      // close previous group
      if (domGroupFlattenChildren) {
        children.push(_closeGroup());
      }
      // ok
      return children;
    },
  },
};
