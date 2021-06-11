cube(`DynamicProperty`, {
  sql: `SELECT * FROM public.dynamic_property`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    key: {
      sql: `key`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
