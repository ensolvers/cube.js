cube(`Playlist`, {
  sql: `SELECT * FROM public.playlist`,
  
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
    
    description: {
      sql: `description`,
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
