cube(`Patient`, {
  sql: `SELECT * FROM public.patient`,
  
  joins: {
    Person: {
      sql: `${CUBE}.person_id = ${Person}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [areYouAwareOfTheMountingEvidence, id, athenaHealthid, counselorName, currentProvider, ecFirstName, ecLastName, howDidYouHearAboutUs, kidneyMedicalHistory, listAnySurgeriesWithApprDate, nameAndAddressOfClosestPharmacy, shipmentId, sitterName, billingCountry, createdBy, lastPatientStatusChangeDate, lastShipmentPrescriptionDate, maintenanceStageDate, medicalConsultationStageDate, nprStageDate, pendingPaymentStageDate, preMedicalStageDate, saStageDate, shipment1prescriptionDate, shipment1stageDate, shipment2stageDate, shipment3stageDate, nextFollowUpDate]
    },
    
    shipmentNumber: {
      sql: `shipment_number`,
      type: `sum`
    }
  },
  
  dimensions: {
    areYouAwareOfTheMountingEvidence: {
      sql: `are_you_aware_of_the_mounting_evidence`,
      type: `string`
    },
    
    areYouInterestedInLearningHowCouns: {
      sql: `are_you_interested_in_learning_how_couns`,
      type: `string`
    },
    
    doYouHaveChronicPain: {
      sql: `do_you_have_chronic_pain`,
      type: `string`
    },
    
    dryExperience: {
      sql: `dry_experience`,
      type: `string`
    },
    
    haveYouHadAPsychiatrist: {
      sql: `have_you_had_a_psychiatrist`,
      type: `string`
    },
    
    haveYouHadATherapist: {
      sql: `have_you_had_a_therapist`,
      type: `string`
    },
    
    historyOfCancer: {
      sql: `history_of_cancer`,
      type: `string`
    },
    
    initialEvalReadFlagQ1: {
      sql: `initial_eval_read_flag_q1`,
      type: `string`
    },
    
    initialEvalReadFlagQ2: {
      sql: `initial_eval_read_flag_q2`,
      type: `string`
    },
    
    initialEvalReadFlagQ3: {
      sql: `initial_eval_read_flag_q3`,
      type: `string`
    },
    
    initialEvalReadFlagQ4: {
      sql: `initial_eval_read_flag_q4`,
      type: `string`
    },
    
    initialEvalReadFlagQ5: {
      sql: `initial_eval_read_flag_q5`,
      type: `string`
    },
    
    initialEvalReadFlagQ6: {
      sql: `initial_eval_read_flag_q6`,
      type: `string`
    },
    
    initialEvalReadFlagQ7: {
      sql: `initial_eval_read_flag_q7`,
      type: `string`
    },
    
    nprRedFlagQ1: {
      sql: `npr_red_flag_q1`,
      type: `string`
    },
    
    nprRedFlagQ2: {
      sql: `npr_red_flag_q2`,
      type: `string`
    },
    
    nprRedFlagQ3: {
      sql: `npr_red_flag_q3`,
      type: `string`
    },
    
    nprRedFlagQ4: {
      sql: `npr_red_flag_q4`,
      type: `string`
    },
    
    nprRedFlagQ5: {
      sql: `npr_red_flag_q5`,
      type: `string`
    },
    
    nprRedFlagQ6: {
      sql: `npr_red_flag_q6`,
      type: `string`
    },
    
    nprRedFlagQ7: {
      sql: `npr_red_flag_q7`,
      type: `string`
    },
    
    nprRedFlagQ8: {
      sql: `npr_red_flag_q8`,
      type: `string`
    },
    
    possibilityOfPregnancy: {
      sql: `possibility_of_pregnancy`,
      type: `string`
    },
    
    previousPsychedelicExperience: {
      sql: `previous_psychedelic_experience`,
      type: `string`
    },
    
    workingWithCounselor: {
      sql: `working_with_counselor`,
      type: `string`
    },
    
    nueExecutiveReferrals: {
      sql: `nue_executive_referrals`,
      type: `string`
    },
    
    createShipment0: {
      sql: `create_shipment_0`,
      type: `string`,
      title: `Create Shipment 0`
    },
    
    kcRegistrationFormSubmitted: {
      sql: `kc_registration_form_submitted`,
      type: `string`
    },
    
    recentTransactionApproved: {
      sql: `recent_transaction_approved`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    accountInDefault: {
      sql: `account_in_default`,
      type: `string`
    },
    
    activeFinancedContract: {
      sql: `active_financed_contract`,
      type: `string`
    },
    
    athenaHealthid: {
      sql: `athena_healthid`,
      type: `string`
    },
    
    accountStatus: {
      sql: `account_status`,
      type: `string`
    },
    
    age: {
      sql: `age`,
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
    
    averageDailyPain: {
      sql: `average_daily_pain`,
      type: `string`
    },
    
    clientStory: {
      sql: `client_story`,
      type: `string`
    },
    
    counselorEmail: {
      sql: `counselor_email`,
      type: `string`
    },
    
    counselorFaxNumber: {
      sql: `counselor_fax_number`,
      type: `string`
    },
    
    counselorName: {
      sql: `counselor_name`,
      type: `string`
    },
    
    counselorPhoneNumber: {
      sql: `counselor_phone_number`,
      type: `string`
    },
    
    currentMedications: {
      sql: `current_medications`,
      type: `string`
    },
    
    currentPackage: {
      sql: `current_package`,
      type: `string`
    },
    
    currentProvider: {
      sql: `current_provider`,
      type: `string`
    },
    
    daysSinceLastStageChange: {
      sql: `days_since_last_stage_change`,
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
    
    doYouUseAnyOfTheFollowing: {
      sql: `do_you_use_any_of_the_following`,
      type: `string`
    },
    
    ecFirstName: {
      sql: `ec_first_name`,
      type: `string`
    },
    
    ecLastName: {
      sql: `ec_last_name`,
      type: `string`
    },
    
    ecPhoneNumber: {
      sql: `ec_phone_number`,
      type: `string`
    },
    
    ecRelationship: {
      sql: `ec_relationship`,
      type: `string`
    },
    
    endocrineMedicalHistory: {
      sql: `endocrine_medical_history`,
      type: `string`
    },
    
    haveYouTriedTheFollowing: {
      sql: `have_you_tried_the_following`,
      type: `string`
    },
    
    heartMedicalHistory: {
      sql: `heart_medical_history`,
      type: `string`
    },
    
    hematologyMedicalHistory: {
      sql: `hematology_medical_history`,
      type: `string`
    },
    
    howDidYouHearAboutUs: {
      sql: `how_did_you_hear_about_us`,
      type: `string`
    },
    
    infectionMedicalHistory: {
      sql: `infection_medical_history`,
      type: `string`
    },
    
    kidneyMedicalHistory: {
      sql: `kidney_medical_history`,
      type: `string`
    },
    
    listAllMedicationAllergiesReaction: {
      sql: `list_all_medication_allergies_reaction`,
      type: `string`
    },
    
    listAnyOtherMedicalIssues: {
      sql: `list_any_other_medical_issues`,
      type: `string`
    },
    
    listAnySurgeriesWithApprDate: {
      sql: `list_any_surgeries_with_appr_date`,
      type: `string`
    },
    
    liverMedicalHistory: {
      sql: `liver_medical_history`,
      type: `string`
    },
    
    lungMedicalHistory: {
      sql: `lung_medical_history`,
      type: `string`
    },
    
    nameAndAddressOfClosestPharmacy: {
      sql: `name_and_address_of_closest_pharmacy`,
      type: `string`
    },
    
    neurologicalMedicalHistory: {
      sql: `neurological_medical_history`,
      type: `string`
    },
    
    occupation: {
      sql: `occupation`,
      type: `string`
    },
    
    patientEmail: {
      sql: `patient_email`,
      type: `string`
    },
    
    patientOverdue: {
      sql: `patient_overdue`,
      type: `string`
    },
    
    patientStatus: {
      sql: `patient_status`,
      type: `string`
    },
    
    previousPainMedications: {
      sql: `previous_pain_medications`,
      type: `string`
    },
    
    psychiatricMedicalHistory: {
      sql: `psychiatric_medical_history`,
      type: `string`
    },
    
    reviewOfAbdominalSymptoms: {
      sql: `review_of_abdominal_symptoms`,
      type: `string`
    },
    
    reviewOfCardiovascularSymptoms: {
      sql: `review_of_cardiovascular_symptoms`,
      type: `string`
    },
    
    reviewOfConstitutionalSymptoms: {
      sql: `review_of_constitutional_symptoms`,
      type: `string`
    },
    
    reviewOfEndocrineSymptoms: {
      sql: `review_of_endocrine_symptoms`,
      type: `string`
    },
    
    reviewOfGenitourinarySymptoms: {
      sql: `review_of_genitourinary_symptoms`,
      type: `string`
    },
    
    reviewOfHeadAndNeckSymptoms: {
      sql: `review_of_head_and_neck_symptoms`,
      type: `string`
    },
    
    reviewOfHematologySymptoms: {
      sql: `review_of_hematology_symptoms`,
      type: `string`
    },
    
    reviewOfMusculoskeletalSymptoms: {
      sql: `review_of_musculoskeletal_symptoms`,
      type: `string`
    },
    
    reviewOfNeurologicalSymptoms: {
      sql: `review_of_neurological_symptoms`,
      type: `string`
    },
    
    reviewOfPsychologicalSymptoms: {
      sql: `review_of_psychological_symptoms`,
      type: `string`
    },
    
    reviewOfRespiratorySymptoms: {
      sql: `review_of_respiratory_symptoms`,
      type: `string`
    },
    
    reviewOfSkinSymptoms: {
      sql: `review_of_skin_symptoms`,
      type: `string`
    },
    
    rheumatology: {
      sql: `rheumatology`,
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
    
    sitterEmail: {
      sql: `sitter_email`,
      type: `string`
    },
    
    sitterName: {
      sql: `sitter_name`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    stomachMedicalHistory: {
      sql: `stomach_medical_history`,
      type: `string`
    },
    
    totalShipmentCreditsRemaining: {
      sql: `total_shipment_credits_remaining`,
      type: `string`
    },
    
    whichPsychedelicsHaveYouTried: {
      sql: `which_psychedelics_have_you_tried`,
      type: `string`
    },
    
    accountOwner: {
      sql: `account_owner`,
      type: `string`
    },
    
    billingCountry: {
      sql: `billing_country`,
      type: `string`
    },
    
    assignedWt: {
      sql: `assigned_wt`,
      type: `string`
    },
    
    createdBy: {
      sql: `created_by`,
      type: `string`
    },
    
    lastModifiedBy: {
      sql: `last_modified_by`,
      type: `string`
    },
    
    latestDose: {
      sql: `latest_dose`,
      type: `string`
    },
    
    escalationNotes: {
      sql: `escalation_notes`,
      type: `string`
    },
    
    mostRecentTrackingNumber: {
      sql: `most_recent_tracking_number`,
      type: `string`
    },
    
    lastPatientStatusChangeDate: {
      sql: `last_patient_status_change_date`,
      type: `time`
    },
    
    lastShipmentPrescriptionDate: {
      sql: `last_shipment_prescription_date`,
      type: `time`
    },
    
    maintenanceStageDate: {
      sql: `maintenance_stage_date`,
      type: `time`
    },
    
    medicalConsultationStageDate: {
      sql: `medical_consultation_stage_date`,
      type: `time`
    },
    
    nprStageDate: {
      sql: `npr_stage_date`,
      type: `time`
    },
    
    pendingPaymentStageDate: {
      sql: `pending_payment_stage_date`,
      type: `time`
    },
    
    preMedicalStageDate: {
      sql: `pre_medical_stage_date`,
      type: `time`
    },
    
    saStageDate: {
      sql: `sa_stage_date`,
      type: `time`
    },
    
    shipment1prescriptionDate: {
      sql: `shipment1prescription_date`,
      type: `time`
    },
    
    shipment1stageDate: {
      sql: `shipment1stage_date`,
      type: `time`
    },
    
    shipment2stageDate: {
      sql: `shipment2stage_date`,
      type: `time`
    },
    
    shipment3stageDate: {
      sql: `shipment3stage_date`,
      type: `time`
    },
    
    nextFollowUpDate: {
      sql: `next_follow_up_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
