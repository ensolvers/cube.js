cube(`LeadActivity`, {
  sql: `SELECT * FROM public.lead_activity`,
  
  joins: {
    Lead: {
      sql: `${CUBE}.lead_id = ${Lead}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, salesforceId]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    appointmentType: {
      sql: `appointment_type`,
      type: `string`
    },
    
    hesitation: {
      sql: `hesitation`,
      type: `string`
    },
    
    leadCategory: {
      sql: `lead_category`,
      type: `string`
    },
    
    meetingType: {
      sql: `meeting_type`,
      type: `string`
    },
    
    packageSelected: {
      sql: `package_selected`,
      type: `string`
    },
    
    salesforceId: {
      sql: `salesforce_id`,
      type: `string`
    },
    
    appointmentTime: {
      sql: `appointment_time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
