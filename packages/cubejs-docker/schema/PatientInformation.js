cube(`PatientInformation`, {
  sql: `SELECT * FROM public.patient_information`,
  
  joins: {
    Patient: {
      sql: `${CUBE}.patient_id = ${Patient}.id`,
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
    
    content: {
      sql: `content`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
