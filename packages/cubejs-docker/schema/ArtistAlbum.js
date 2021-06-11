cube(`ArtistAlbum`, {
  sql: `SELECT * FROM public.artist_album`,
  
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
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  },
  
  dataSource: `default`
});
