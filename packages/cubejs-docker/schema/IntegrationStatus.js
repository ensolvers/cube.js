cube(`IntegrationStatus`, {
  sql: `SELECT * FROM public.integration_status`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    integrationKey: {
      sql: `integration_key`,
      type: `string`
    },
    
    lastStart: {
      sql: `last_start`,
      type: `time`
    },
    
    lastEndSuccess: {
      sql: `last_end_success`,
      type: `time`
    },
    
    lastEndFailure: {
      sql: `last_end_failure`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
