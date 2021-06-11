cube(`Tag`, {
  sql: `SELECT * FROM public.tag`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId, name, normalizedName]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    normalizedName: {
      sql: `normalized_name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
