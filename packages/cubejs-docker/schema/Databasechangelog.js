cube(`Databasechangelog`, {
  sql: `SELECT * FROM public.databasechangelog`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [filename, deploymentId, id, dateexecuted]
    }
  },
  
  dimensions: {
    author: {
      sql: `author`,
      type: `string`
    },
    
    filename: {
      sql: `filename`,
      type: `string`
    },
    
    exectype: {
      sql: `exectype`,
      type: `string`
    },
    
    md5sum: {
      sql: `md5sum`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    tag: {
      sql: `tag`,
      type: `string`
    },
    
    liquibase: {
      sql: `liquibase`,
      type: `string`
    },
    
    contexts: {
      sql: `contexts`,
      type: `string`
    },
    
    labels: {
      sql: `labels`,
      type: `string`
    },
    
    deploymentId: {
      sql: `deployment_id`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    dateexecuted: {
      sql: `dateexecuted`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
