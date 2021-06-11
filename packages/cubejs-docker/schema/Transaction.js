cube(`Transaction`, {
  sql: `SELECT * FROM public.transaction`,
  
  joins: {
    Patient: {
      sql: `${CUBE}.patient_id = ${Patient}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, employeeId, salesforceId, paymentDate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    assignedWt: {
      sql: `assigned_wt`,
      type: `string`
    },
    
    discountType: {
      sql: `discount_type`,
      type: `string`
    },
    
    employeeId: {
      sql: `employee_id`,
      type: `string`
    },
    
    newOrRecurring: {
      sql: `new_or_recurring`,
      type: `string`
    },
    
    paymentMethod: {
      sql: `payment_method`,
      type: `string`
    },
    
    salesforceId: {
      sql: `salesforce_id`,
      type: `string`
    },
    
    transactionNotes: {
      sql: `transaction_notes`,
      type: `string`
    },
    
    transactionType: {
      sql: `transaction_type`,
      type: `string`
    },
    
    paymentDate: {
      sql: `payment_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
