cube(`PlaylistTag`, {
  sql: `SELECT * FROM public.playlist_tag`,
  
  joins: {
    Playlist: {
      sql: `${CUBE}.playlist_id = ${Playlist}.id`,
      relationship: `belongsTo`
    },
    
    Tag: {
      sql: `${CUBE}.tag_id = ${Tag}.id`,
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
