cube(`Person`, {
  sql: `SELECT * FROM public.person`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, firstName, lastName, city, salesforceId, externalId, createdAt, dateOfBirth]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    legalSex: {
      sql: `legal_sex`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    zipCode: {
      sql: `zip_code`,
      type: `string`
    },
    
    salesforceId: {
      sql: `salesforce_id`,
      type: `string`
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    dateOfBirth: {
      sql: `date_of_birth`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
