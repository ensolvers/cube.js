cube(`Song`, {
  sql: `SELECT * FROM public.song`,
  
  joins: {
    Artist: {
      sql: `${CUBE}.artist_id = ${Artist}.id`,
      relationship: `belongsTo`
    },
    
    Album: {
      sql: `${CUBE}.album_id = ${Album}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId, integrationId, title]
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
    
    integrationId: {
      sql: `integration_id`,
      type: `string`
    },
    
    isrc: {
      sql: `isrc`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
