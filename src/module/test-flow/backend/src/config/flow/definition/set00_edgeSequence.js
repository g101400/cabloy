class Listener {
  constructor(context) {
    this.context = context;
  }

  async onNodeEnter(contextNode) {
    if (contextNode._nodeRef.id === 'startEvent_1') {
      // nodeVars
      const x = this.context.vars.get('x');
      contextNode.vars.set('x', x);
    }
  }

}

module.exports = app => {
  const definition = {
    info: {
      title: 'Test_Set00_Edge_Sequence',
      description: 'Test_Set00_Edge_Sequence',
      version: '2020-09-25 00:00:04',
    },
    listener: Listener.toString(),
    process: {
      nodes: [
        {
          id: 'startEvent_1',
          name: 'Start',
          type: 'startEventNone',
        },
        {
          id: 'endEvent_1',
          name: 'End',
          type: 'endEventNone',
        },
        {
          id: 'endEvent_2',
          name: 'End',
          type: 'endEventNone',
        },
      ],
      edges: [
        {
          id: 'edge_1',
          source: 'startEvent_1',
          target: 'endEvent_1',
          options: {
            conditionExpression: 'context.vars.get(\'x\')===1',
          },
        },
        {
          id: 'edge_2',
          source: 'startEvent_1',
          target: 'endEvent_2',
          options: {
            conditionExpression: `
              const x=contextNode.vars.get('x');
              x===2;
            `,
          },
        },
      ],
    },
  };
  return definition;
};