cube(`Artist`, {
  sql: `SELECT * FROM public.artist`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId, name]
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
    
    pictureUrl: {
      sql: `picture_url`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
