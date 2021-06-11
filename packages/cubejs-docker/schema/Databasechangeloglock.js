cube(`Databasechangeloglock`, {
  sql: `SELECT * FROM public.databasechangeloglock`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    locked: {
      sql: `locked`,
      type: `string`
    },
    
    lockedby: {
      sql: `lockedby`,
      type: `string`
    },
    
    lockgranted: {
      sql: `lockgranted`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
