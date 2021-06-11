cube(`UserMedication`, {
  sql: `SELECT * FROM public.user_medication`,
  
  joins: {
    Medication: {
      sql: `${CUBE}.medication_id = ${Medication}.id`,
      relationship: `belongsTo`
    },
    
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
    }
  },
  
  dataSource: `default`
});
