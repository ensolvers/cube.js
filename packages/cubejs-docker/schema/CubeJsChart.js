cube(`CubeJsChart`, {
  sql: `SELECT * FROM public.cube_js_chart`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    query: {
      sql: `query`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
