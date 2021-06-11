cube(`PlaylistSong`, {
  sql: `SELECT * FROM public.playlist_song`,
  
  joins: {
    Playlist: {
      sql: `${CUBE}.playlist_id = ${Playlist}.id`,
      relationship: `belongsTo`
    },
    
    Song: {
      sql: `${CUBE}.song_id = ${Song}.id`,
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
    },
    
    section: {
      sql: `section`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
