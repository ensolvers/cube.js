cube(`Lead`, {
  sql: `SELECT * FROM public.lead`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, awareOfEvidence, firstName, lastName, salesforceid, salesforceCreatedDate, evaluationStageDate, qualifiedStageDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    blackFlag: {
      sql: `black_flag`,
      type: `string`
    },
    
    redFlagQ1: {
      sql: `red_flag_q1`,
      type: `string`
    },
    
    redFlagQ2: {
      sql: `red_flag_q2`,
      type: `string`
    },
    
    redFlagQ3: {
      sql: `red_flag_q3`,
      type: `string`
    },
    
    redFlagQ4: {
      sql: `red_flag_q4`,
      type: `string`
    },
    
    redFlagQ5: {
      sql: `red_flag_q5`,
      type: `string`
    },
    
    redFlagQ6: {
      sql: `red_flag_q6`,
      type: `string`
    },
    
    redFlagQ7: {
      sql: `red_flag_q7`,
      type: `string`
    },
    
    interestedInLearning: {
      sql: `interested_in_learning`,
      type: `string`
    },
    
    awareOfEvidence: {
      sql: `aware_of_evidence`,
      type: `string`
    },
    
    believeCanTakeControl: {
      sql: `believe_can_take_control`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    salesforceid: {
      sql: `salesforceid`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    clientStory: {
      sql: `client_story`,
      type: `string`
    },
    
    escalationComments: {
      sql: `escalation_comments`,
      type: `string`
    },
    
    contactCenterMessage: {
      sql: `contact_center_message`,
      type: `string`
    },
    
    referringCounselor: {
      sql: `referring_counselor`,
      type: `string`
    },
    
    stateEligibility: {
      sql: `state_eligibility`,
      type: `string`
    },
    
    sourceManual: {
      sql: `source_manual`,
      type: `string`
    },
    
    utmTerm: {
      sql: `utm_term`,
      type: `string`
    },
    
    utmCampaign: {
      sql: `utm_campaign`,
      type: `string`
    },
    
    utmMedium: {
      sql: `utm_medium`,
      type: `string`
    },
    
    utmContent: {
      sql: `utm_content`,
      type: `string`
    },
    
    utmSource: {
      sql: `utm_source`,
      type: `string`
    },
    
    salesforceCreatedDate: {
      sql: `salesforce_created_date`,
      type: `time`
    },
    
    evaluationStageDate: {
      sql: `evaluation_stage_date`,
      type: `time`
    },
    
    qualifiedStageDate: {
      sql: `qualified_stage_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
