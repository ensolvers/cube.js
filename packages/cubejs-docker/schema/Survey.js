cube(`Survey`, {
  sql: `SELECT * FROM public.survey`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    structure: {
      sql: `structure`,
      type: `string`
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
