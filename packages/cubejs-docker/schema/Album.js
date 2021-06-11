cube(`Album`, {
  sql: `SELECT * FROM public.album`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId, title]
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
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    pictureUrl: {
      sql: `picture_url`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
