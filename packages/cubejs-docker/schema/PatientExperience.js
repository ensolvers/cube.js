cube(`PatientExperience`, {
  sql: `SELECT * FROM public.patient_experience`,
  
  joins: {
    Patient: {
      sql: `${CUBE}.patient_id = ${Patient}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, didYouTakePrescribedDose, suicidalIdeation, howDidItTaste, medicalProvider, medicalProviderRating, otherSideEffects, shipmentId, sideEffectsAnxiety, sideEffectsBlurredVision, sideEffectsDifficultySpeaking, sideEffectsDifficultyThinking, sideEffectsDizziness, sideEffectsLossOfBalance, sideEffectsMemoryIssues, sideEffectsNausea, sideEffectsPainWithUrination, sideEffectsPalpitations, sideEffectsPubicPain, sitterName, externalId, prescriptionDate]
    },
    
    shipmentNumber: {
      sql: `shipment_number`,
      type: `sum`
    }
  },
  
  dimensions: {
    workingWithCounselor: {
      sql: `working_with_counselor`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    moreInformationKetaCounseling: {
      sql: `more_information_keta_counseling`,
      type: `string`
    },
    
    didYouTakePrescribedDose: {
      sql: `did_you_take_prescribed_dose`,
      type: `string`
    },
    
    suicidalIdeation: {
      sql: `suicidal_ideation`,
      type: `string`
    },
    
    overnightShipment: {
      sql: `overnight_shipment`,
      type: `string`
    },
    
    additionalDetails: {
      sql: `additional_details`,
      type: `string`
    },
    
    additionalKcDetails: {
      sql: `additional_kc_details`,
      type: `string`
    },
    
    anxietyInventoryQ1: {
      sql: `anxiety_inventory_q1`,
      type: `string`
    },
    
    anxietyInventoryQ2: {
      sql: `anxiety_inventory_q2`,
      type: `string`
    },
    
    anxietyInventoryQ3: {
      sql: `anxiety_inventory_q3`,
      type: `string`
    },
    
    anxietyInventoryQ4: {
      sql: `anxiety_inventory_q4`,
      type: `string`
    },
    
    anxietyInventoryQ5: {
      sql: `anxiety_inventory_q5`,
      type: `string`
    },
    
    anxietyInventoryQ6: {
      sql: `anxiety_inventory_q6`,
      type: `string`
    },
    
    anxietyInventoryQ7: {
      sql: `anxiety_inventory_q7`,
      type: `string`
    },
    
    changeDose: {
      sql: `change_dose`,
      type: `string`
    },
    
    csmRating: {
      sql: `csm_rating`,
      type: `string`
    },
    
    currentMedications: {
      sql: `current_medications`,
      type: `string`
    },
    
    depressionInventoryQ1: {
      sql: `depression_inventory_q1`,
      type: `string`
    },
    
    depressionInventoryQ2: {
      sql: `depression_inventory_q2`,
      type: `string`
    },
    
    depressionInventoryQ3: {
      sql: `depression_inventory_q3`,
      type: `string`
    },
    
    depressionInventoryQ4: {
      sql: `depression_inventory_q4`,
      type: `string`
    },
    
    depressionInventoryQ5: {
      sql: `depression_inventory_q5`,
      type: `string`
    },
    
    depressionInventoryQ6: {
      sql: `depression_inventory_q6`,
      type: `string`
    },
    
    depressionInventoryQ7: {
      sql: `depression_inventory_q7`,
      type: `string`
    },
    
    depressionInventoryQ8: {
      sql: `depression_inventory_q8`,
      type: `string`
    },
    
    depressionInventoryQ9: {
      sql: `depression_inventory_q9`,
      type: `string`
    },
    
    experienceIntensityRating: {
      sql: `experience_intensity_rating`,
      type: `string`
    },
    
    howCanWeImprove: {
      sql: `how_can_we_improve`,
      type: `string`
    },
    
    howDidItTaste: {
      sql: `how_did_it_taste`,
      type: `string`
    },
    
    howLongBeforeItWoreOff: {
      sql: `how_long_before_it_wore_off`,
      type: `string`
    },
    
    howLongUntilEffects: {
      sql: `how_long_until_effects`,
      type: `string`
    },
    
    ketaCounselorExperience: {
      sql: `keta_counselor_experience`,
      type: `string`
    },
    
    maintenanceMonth: {
      sql: `maintenance_month`,
      type: `string`
    },
    
    maintenancePlan: {
      sql: `maintenance_plan`,
      type: `string`
    },
    
    medicalProvider: {
      sql: `medical_provider`,
      type: `string`
    },
    
    medicalProviderRating: {
      sql: `medical_provider_rating`,
      type: `string`
    },
    
    medicationChanges: {
      sql: `medication_changes`,
      type: `string`
    },
    
    otherSideEffects: {
      sql: `other_side_effects`,
      type: `string`
    },
    
    overallExperienceRating: {
      sql: `overall_experience_rating`,
      type: `string`
    },
    
    peakEffects: {
      sql: `peak_effects`,
      type: `string`
    },
    
    psychedelicExperienceDetails: {
      sql: `psychedelic_experience_details`,
      type: `string`
    },
    
    psychedelicExperienceRating: {
      sql: `psychedelic_experience_rating`,
      type: `string`
    },
    
    reShipNotes: {
      sql: `re_ship_notes`,
      type: `string`
    },
    
    reasonForDoseAdjustment: {
      sql: `reason_for_dose_adjustment`,
      type: `string`
    },
    
    shipmentId: {
      sql: `shipment_id`,
      type: `string`
    },
    
    shippingState: {
      sql: `shipping_state`,
      type: `string`
    },
    
    shippingStreetAddress: {
      sql: `shipping_street_address`,
      type: `string`
    },
    
    shippingZipCode: {
      sql: `shipping_zip_code`,
      type: `string`
    },
    
    sideEffectsAnxiety: {
      sql: `side_effects_anxiety`,
      type: `string`
    },
    
    sideEffectsBlurredVision: {
      sql: `side_effects_blurred_vision`,
      type: `string`
    },
    
    sideEffectsDifficultySpeaking: {
      sql: `side_effects_difficulty_speaking`,
      type: `string`
    },
    
    sideEffectsDifficultyThinking: {
      sql: `side_effects_difficulty_thinking`,
      type: `string`
    },
    
    sideEffectsDizziness: {
      sql: `side_effects_dizziness`,
      type: `string`
    },
    
    sideEffectsLossOfBalance: {
      sql: `side_effects_loss_of_balance`,
      type: `string`
    },
    
    sideEffectsMemoryIssues: {
      sql: `side_effects_memory_issues`,
      type: `string`
    },
    
    sideEffectsNausea: {
      sql: `side_effects_nausea`,
      type: `string`
    },
    
    sideEffectsPainWithUrination: {
      sql: `side_effects_pain_with_urination`,
      type: `string`
    },
    
    sideEffectsPalpitations: {
      sql: `side_effects_palpitations`,
      type: `string`
    },
    
    sideEffectsPubicPain: {
      sql: `side_effects_pubic_pain`,
      type: `string`
    },
    
    sitterName: {
      sql: `sitter_name`,
      type: `string`
    },
    
    whatDoseInstead: {
      sql: `what_dose_instead`,
      type: `string`
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    },
    
    prescriptionDate: {
      sql: `prescription_date`,
      type: `time`
    },
    
    experienceTrackerSubmitted: {
      sql: `experience_tracker_submitted`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
