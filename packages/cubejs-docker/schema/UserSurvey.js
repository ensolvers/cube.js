cube(`UserSurvey`, {
  sql: `SELECT * FROM public.user_survey`,
  
  joins: {
    Survey: {
      sql: `${CUBE}.survey_id = ${Survey}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, externalId]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    answers: {
      sql: `answers`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
