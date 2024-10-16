var generalQuestionnaire = {
  item: [
    {
      item: [
        {
          type: "choice",
          linkId: "4973904880963",
          code: [
            {
              code: "woundCareProvided",
            },
          ],
          text: "Wound Care Provided",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "yes",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                code: "no",
                display: "No",
              },
            },
          ],
          item: [
            {
              type: "choice",
              linkId: "275112108440",
              code: [
                {
                  code: "dueTo",
                },
              ],
              text: "No Wound Care Provided Due To",
              enableWhen: [
                {
                  question: "4973904880963",
                  operator: "=",
                  answerCoding: {
                    code: "no",
                    display: "No",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "awaitingOrders",
                    display: "Awaiting orders",
                  },
                },
                {
                  valueCoding: {
                    code: "dressingAlreadyChanged",
                    display: "Caregiver completed care",
                  },
                },
                {
                  valueCoding: {
                    code: "dressingAlreadyChangedFamily",
                    display: "Client completed care",
                  },
                },
                {
                  valueCoding: {
                    code: "nonRemovableDressing",
                    display: "Covered by non-removable dressing or device",
                  },
                },
                {
                  valueCoding: {
                    code: "notOrdered",
                    display: "Not ordered this visit",
                  },
                },
                {
                  valueCoding: {
                    code: "patientDeclined",
                    display: "Refused care",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "string",
          linkId: "5016985687480",
          code: [
            {
              code: "ordersText",
            },
          ],
          text: "Wound Care Orders",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
        },
      ],
      type: "string",
      linkId: "5350172476446",
      text: "Visit Information",
    },
    {
      type: "smart-tissue",
      linkId: "5056937386480",
      text: "smart tissue question"
    },
    {
      item: [
        {
          type: "string",
          linkId: "5818188304437",
          code: [
            {
              code: "bodyLocationNotes",
            },
          ],
          text: "Notes for Body Location",
        },
        {
          item: [
            {
              type: "choice",
              linkId: "6894780928002",
              code: [
                {
                  code: "arterialUlcerSubType",
                },
              ],
              text: "Arterial Ulcer Subtype",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "arterial",
                    display: "Arterial Ulcer",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "necroticDryGangrene",
                    display: "Necrotic - Dry Gangrene",
                  },
                },
                {
                  valueCoding: {
                    code: "necroticWetGangrene",
                    display: "Necrotic - Wet Gangrene",
                  },
                },
                {
                  valueCoding: {
                    code: "notNecrotic",
                    display: "Not Necrotic",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "6159655014276",
              code: [
                {
                  code: "bruiseColor",
                },
              ],
              text: "Bruise Color",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "bruise",
                    display: "Bruise",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "bluePurple",
                    display: "Blue / Purple",
                  },
                },
                {
                  valueCoding: {
                    code: "green",
                    display: "Green",
                  },
                },
                {
                  valueCoding: {
                    code: "red",
                    display: "Red",
                  },
                },
                {
                  valueCoding: {
                    code: "yellowBrown",
                    display: "Yellow/Brown",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "1723955443148",
              code: [
                {
                  code: "burnDegree",
                },
              ],
              text: "Burn Degree",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "burn",
                    display: "Burn",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "first",
                    display: "1st Degree",
                  },
                },
                {
                  valueCoding: {
                    code: "second",
                    display: "2nd Degree",
                  },
                },
                {
                  valueCoding: {
                    code: "third",
                    display: "3rd Degree",
                  },
                },
                {
                  valueCoding: {
                    code: "fourth",
                    display: "4th Degree",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "9784124342086",
              code: [
                {
                  code: "burnDegree",
                },
              ],
              text: "Burn Degree 2",
              answerOption: [
                {
                  valueCoding: {
                    code: "first",
                    display: "Superficial",
                  },
                },
                {
                  valueCoding: {
                    code: "superficialSecond",
                    display: "Superficial Partial Thickness (2nd Degree)",
                  },
                },
                {
                  valueCoding: {
                    code: "deepSecond",
                    display: "Deep Partial Thickness (2nd degree)",
                  },
                },
                {
                  valueCoding: {
                    code: "superficialThird",
                    display: "Superficial Thickness (3rd Degree)",
                  },
                },
                {
                  valueCoding: {
                    code: "fullThird",
                    display: "Full thickness (3rd Degree)",
                  },
                },
                {
                  valueCoding: {
                    code: "deepThird",
                    display: "Deep Thickness (3rd Degree)",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "3759863855187",
              code: [
                {
                  code: "burnDegree",
                },
              ],
              text: "Burn Type",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "burn",
                    display: "Burn",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "chemical",
                    display: "Chemical",
                  },
                },
                {
                  valueCoding: {
                    code: "cold",
                    display: "Cold",
                  },
                },
                {
                  valueCoding: {
                    code: "electrical",
                    display: "Electrical",
                  },
                },
                {
                  valueCoding: {
                    code: "friction",
                    display: "Friction",
                  },
                },
                {
                  valueCoding: {
                    code: "radiation",
                    display: "Radiation",
                  },
                },
                {
                  valueCoding: {
                    code: "thermal",
                    display: "Thermal",
                  },
                },
              ],
            },
            {
              item: [
                {
                  type: "string",
                  linkId: "7879549517652",
                  text: "Colostomy - Other (Comment)",
                  enableWhen: [
                    {
                      question: "9043787420680",
                      operator: "=",
                      answerCoding: {
                        code: "other",
                        display: "Other (Comment)",
                      },
                    },
                  ],
                },
              ],
              type: "choice",
              linkId: "9043787420680",
              code: [
                {
                  code: "colostomyType",
                },
              ],
              text: "Colostomy Type",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "colostomy",
                    display: "Colostomy",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "ascending",
                    display: "Ascending",
                  },
                },
                {
                  valueCoding: {
                    code: "colonConduit",
                    display: "Colon Conduit (Wet Colostomy)",
                  },
                },
                {
                  valueCoding: {
                    code: "descending",
                    display: "Descending",
                  },
                },
                {
                  valueCoding: {
                    code: "doubleBarrel",
                    display: "Double Barrel",
                  },
                },
                {
                  valueCoding: {
                    code: "end",
                    display: "End",
                  },
                },
                {
                  valueCoding: {
                    code: "endLoop",
                    display: "End Loop",
                  },
                },
                {
                  valueCoding: {
                    code: "loop",
                    display: "Loop",
                  },
                },
                {
                  valueCoding: {
                    code: "sigmoid",
                    display: "Sigmoid",
                  },
                },
                {
                  valueCoding: {
                    code: "transverse",
                    display: "Transverse",
                  },
                },
                {
                  valueCoding: {
                    code: "other",
                    display: "Other (Comment)",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "5798071069296",
              code: [
                {
                  code: "dermConditionType",
                },
              ],
              text: "Dermatologic Condition Subtype",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "dermCondition",
                    display: "Dermatologic Condition",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "ischemic",
                    display: "Ischemic",
                  },
                },
                {
                  valueCoding: {
                    code: "neuroIschemic",
                    display: "Neuro-ischemic",
                  },
                },
                {
                  valueCoding: {
                    code: "neuropathic",
                    display: "Neuropathic",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "7871425953780",
              code: [
                {
                  code: "fistulaType",
                },
              ],
              text: "Fistula Type",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "fistula",
                    display: "Fistula",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "colocutaneous",
                    display: "Colocutaneous",
                  },
                },
                {
                  valueCoding: {
                    code: "enterocutaneous",
                    display: "Enterocutaneous",
                  },
                },
                {
                  valueCoding: {
                    code: "other",
                    display: "Other (Comment)",
                  },
                },
              ],
              item: [
                {
                  type: "string",
                  linkId: "142857482776",
                  code: [
                    {
                      code: "fistulaTypeOther",
                    },
                  ],
                  text: "Fistula Type - Other (Comment)",
                  enableWhen: [
                    {
                      question: "7871425953780",
                      operator: "=",
                      answerCoding: {
                        code: "other",
                        display: "Other",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "choice",
              linkId: "6256205292473",
              code: [
                {
                  code: "hSuppurtivaStage",
                },
              ],
              text: "Hidradenitis Suppurtiva Stage",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "hSuppurtiva",
                    display: "Hidradenitis Suppurtiva",
                  },
                },
              ],
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "hurleyOne",
                    display: "Hurley Stage I",
                  },
                },
                {
                  valueCoding: {
                    code: "hurleyTwo",
                    display: "Hurley Stage II",
                  },
                },
                {
                  valueCoding: {
                    code: "hurleyThree",
                    display: "Hurley Stage III",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "2055688239688",
              code: [
                {
                  code: "masdType",
                },
              ],
              text: "MASD Type",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "masd",
                    display: "Moisture Associated Skin Damage",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "dermatitis",
                    display: "Dermatitis",
                  },
                },
                {
                  valueCoding: {
                    code: "iad",
                    display: "Incontinence Associated Dermatitis (IAD)",
                  },
                },
                {
                  valueCoding: {
                    code: "itd",
                    display: "Intertriginous Dermatitis (ITD)",
                  },
                },
                {
                  valueCoding: {
                    code: "peristomal",
                    display: "Peristomal MASD",
                  },
                },
                {
                  valueCoding: {
                    code: "periwound",
                    display: "Periwound MASD",
                  },
                },
                {
                  valueCoding: {
                    code: "other",
                    display: "MASD - Other (Comment)",
                  },
                },
              ],
              item: [
                {
                  type: "string",
                  linkId: "2119347648177",
                  code: [
                    {
                      code: "otherMoistureDamage",
                    },
                  ],
                  text: "MASD - Other (Comment)",
                  enableWhen: [
                    {
                      question: "2055688239688",
                      operator: "=",
                      answerCoding: {
                        code: "other",
                        display: "MASD - Other (Comment)",
                      },
                    },
                  ],
                  required: false,
                  repeats: false,
                  readOnly: false,
                },
              ],
            },
            {
              type: "string",
              linkId: "7003466046376",
              code: [
                {
                  code: "lesionComments",
                },
              ],
              text: "Open Lesion Comments",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "lesion",
                    display: "Open Lesion",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "5054983994038",
              code: [
                {
                  code: "pressureUlcerStage",
                },
              ],
              text: "Pressure Stage",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "pressureUlcer",
                    display: "Pressure Injury",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "one",
                    display: "Stage 1",
                  },
                },
                {
                  valueCoding: {
                    code: "two",
                    display: "Stage 2",
                  },
                },
                {
                  valueCoding: {
                    code: "three",
                    display: "Stage 3",
                  },
                },
                {
                  valueCoding: {
                    code: "four",
                    display: "Stage 4",
                  },
                },
                {
                  valueCoding: {
                    code: "unstageable",
                    display: "Unstageable",
                  },
                },
                {
                  valueCoding: {
                    code: "mucosalMembrane",
                    display: "Mucosal Membrane",
                  },
                },
                {
                  valueCoding: {
                    code: "medicalDevice",
                    display: "Medical Device Related",
                  },
                },
                {
                  valueCoding: {
                    code: "dti",
                    display: "Deep Tissue Injury",
                  },
                },
              ],
              item: [
                {
                  type: "choice",
                  linkId: "7372989251190",
                  code: [
                    {
                      code: "pressureUlcerUnstageableCause",
                    },
                  ],
                  text: "Unstageable Due To",
                  enableWhen: [
                    {
                      question: "5054983994038",
                      operator: "=",
                      answerCoding: {
                        code: "unstageable",
                        display: "Unstageable",
                      },
                    },
                  ],
                  answerOption: [
                    {
                      valueCoding: {
                        code: "dressing",
                        display:
                          "Dressing not removable, Non-removable device/dressing",
                      },
                    },
                    {
                      valueCoding: {
                        code: "necrosis",
                        display: "Slough and/or eschar, Slough/Eschar",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "choice",
              linkId: "1946851527088",
              code: [
                {
                  code: "pressureKennedyStage",
                },
              ],
              text: "Pressure Kennedy Stage",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "pressureKennedy",
                    display: "Pressure Injury - Kennedy Terminal",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "one",
                    display: "Stage 1",
                  },
                },
                {
                  valueCoding: {
                    code: "two",
                    display: "Stage 2",
                  },
                },
                {
                  valueCoding: {
                    code: "three",
                    display: "Stage 3",
                  },
                },
                {
                  valueCoding: {
                    code: "four",
                    display: "Stage 4",
                  },
                },
                {
                  valueCoding: {
                    code: "dti",
                    display: "Deep Tissue Injury",
                  },
                },
                {
                  valueCoding: {
                    code: "unstageable",
                    display: "Unstageable",
                  },
                },
              ],
              item: [
                {
                  type: "choice",
                  linkId: "1723472355198",
                  code: [
                    {
                      code: "pressureKennedyUnstageableCause",
                    },
                  ],
                  text: "Unstageable Due to",
                  enableWhen: [
                    {
                      question: "1946851527088",
                      operator: "=",
                      answerCoding: {
                        code: "unstageable",
                        display: "Unstageable",
                      },
                    },
                  ],
                  answerOption: [
                    {
                      valueCoding: {
                        code: "necrosis",
                        display: "Slough and/or eschar",
                      },
                    },
                    {
                      valueCoding: {
                        code: "dressing",
                        display: "Non-removable device/dressing",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "choice",
              linkId: "1340276101650",
              code: [
                {
                  code: "pressureDeviceRelatedStage",
                },
              ],
              text: "Pressure Device Related Stage",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "pressureDeviceRelated",
                    display: "Pressure Injury - Medical Device Related",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "one",
                    display: "Stage 1",
                  },
                },
                {
                  valueCoding: {
                    code: "two",
                    display: "Stage 2",
                  },
                },
                {
                  valueCoding: {
                    code: "there",
                    display: "Stage 3",
                  },
                },
                {
                  valueCoding: {
                    code: "four",
                    display: "Stage 4",
                  },
                },
                {
                  valueCoding: {
                    code: "dti",
                    display: "Deep Tissue Injury",
                  },
                },
                {
                  valueCoding: {
                    code: "mucosalMembrane",
                    display: "Mucosal Membrane",
                  },
                },
                {
                  valueCoding: {
                    code: "unstageable",
                    display: "Unstageable",
                  },
                },
              ],
              item: [
                {
                  type: "choice",
                  linkId: "7722542782440",
                  code: [
                    {
                      code: "pressureDeviceRelatedUnstageableCause",
                    },
                  ],
                  text: "Unstageable Due to",
                  enableWhen: [
                    {
                      question: "1340276101650",
                      operator: "=",
                      answerCoding: {
                        code: "unstageable",
                        display: "Unstageable",
                      },
                    },
                  ],
                  required: false,
                  repeats: false,
                  readOnly: false,
                  answerOption: [
                    {
                      valueCoding: {
                        code: "necrosis",
                        display: "Slough and/or eschar",
                      },
                    },
                    {
                      valueCoding: {
                        code: "dressing",
                        display: "Non-removable device/dressing",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "choice",
              linkId: "358570882899",
              code: [
                {
                  code: "skinTearCategory",
                },
              ],
              text: "Skin Tear Category",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "skinTear",
                    display: "Skin Tear",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "category1Flap",
                    display: "Category 1: Flap",
                  },
                },
                {
                  valueCoding: {
                    code: "category1Linear",
                    display: "Category 1: Linear",
                  },
                },
                {
                  valueCoding: {
                    code: "category2above25",
                    display: "Category II: > 25% Partial Tissue Loss",
                  },
                },
                {
                  valueCoding: {
                    code: "category2below25",
                    display: "Category II: < 25% Partial Tissue Loss",
                  },
                },
                {
                  valueCoding: {
                    code: "category3complete",
                    display: "Category III: Complete Tissue Loss",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "8099213530475",
              code: [
                {
                  code: "skinGraftSite",
                },
              ],
              text: "Skin Graft Site",
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "donorSite",
                    display: "Donor Site",
                  },
                },
                {
                  valueCoding: {
                    code: "graphSite",
                    display: "Graph Site",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "4653203297966",
              code: [
                {
                  code: "surgicalClosure",
                },
              ],
              text: "Surgical Closure Method",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "surgical",
                    display: "Surgical Incision",
                  },
                },
              ],
              required: false,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "closureApprox",
                    display: "Approximated",
                  },
                },
                {
                  valueCoding: {
                    code: "closureTissueAdhesives",
                    display: "Adhesive Closure",
                  },
                },
                {
                  valueCoding: {
                    code: "closureDerma",
                    display: "Dermabond",
                  },
                },
                {
                  valueCoding: {
                    code: "dehiscence",
                    display: "Dehiscence",
                  },
                },
                {
                  valueCoding: {
                    code: "dermabond",
                    display: "Dermabond",
                  },
                },
                {
                  valueCoding: {
                    code: "healingRidge",
                    display: "Healing Ridge",
                  },
                },
                {
                  valueCoding: {
                    code: "incisionApprox",
                    display: "Incision Approximated",
                  },
                },
                {
                  valueCoding: {
                    code: "incisionClean",
                    display: "Incision Clean",
                  },
                },
                {
                  valueCoding: {
                    code: "incisionScabbed",
                    display: "Incision Scabbed",
                  },
                },
                {
                  valueCoding: {
                    code: "closureStaples",
                    display: "Staples",
                  },
                },
                {
                  valueCoding: {
                    code: "closureSteriStrips",
                    display: "Steri-Strips",
                  },
                },
                {
                  valueCoding: {
                    code: "closureSutures",
                    display: "Surface Sutures",
                  },
                },
                {
                  valueCoding: {
                    code: "closureTape",
                    display: "Tape",
                  },
                },
                {
                  valueCoding: {
                    code: "nonRemovableSurgicalDeviceInPlace",
                    display: "Non-Removable Surgical Device In Place",
                  },
                },
                {
                  valueCoding: {
                    code: "closureNone",
                    display: "None",
                  },
                },
                {
                  valueCoding: {
                    code: "closureOpen",
                    display: "Open to Air",
                  },
                },
                {
                  valueCoding: {
                    code: "closureOther",
                    display: "Other",
                  },
                },
                {
                  valueCoding: {
                    code: "openPerMD",
                    display: "Surgical Wound Open Per MD",
                  },
                },
                {
                  valueCoding: {
                    code: "skinEdgeNcrosis",
                    display: "Skin Edge Necrosis",
                  },
                },
                {
                  valueCoding: {
                    code: "skinGraft",
                    display: "Skin Graft",
                  },
                },
                {
                  valueCoding: {
                    code: "closureUta",
                    display: "Unable to Access (UTA)",
                  },
                },
                {
                  valueCoding: {
                    code: "unableToAccessNonremovable",
                    display: "Unable to Access - Non-Removable Dressing/Device",
                  },
                },
                {
                  valueCoding: {
                    code: "unableToAccessPatientRefused",
                    display: "Unable to Access - Patient Refused",
                  },
                },
              ],
              item: [
                {
                  type: "integer",
                  linkId: "9747687079635",
                  code: [
                    {
                      code: "surgicalStapleCount",
                    },
                  ],
                  text: "# of Staples",
                  enableWhen: [
                    {
                      question: "8817715790427",
                      operator: "=",
                      answerCoding: {
                        code: "surgical",
                        display: "Surgical Incision",
                      },
                    },
                  ],
                },
                {
                  type: "integer",
                  linkId: "5734697737040",
                  code: [
                    {
                      code: "surgicalSutureCount",
                    },
                  ],
                  text: "# of Sutures",
                  enableWhen: [
                    {
                      question: "8817715790427",
                      operator: "=",
                      answerCoding: {
                        code: "surgical",
                        display: "Surgical Incision",
                      },
                    },
                  ],
                },
                {
                  type: "string",
                  linkId: "9522556943297",
                  code: [
                    {
                      code: "surgicalClosureOther",
                    },
                  ],
                  text: "Surgical Closure - Other (Comment)",
                  enableWhen: [
                    {
                      question: "4653203297966",
                      operator: "=",
                      answerCoding: {
                        code: "closureOther",
                        display: "Other",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "choice",
              linkId: "8779496854451",
              code: [
                {
                  code: "grade",
                },
              ],
              text: "Wagner's Scale",
              enableWhen: [
                {
                  question: "8817715790427",
                  operator: "=",
                  answerCoding: {
                    code: "diabetic",
                    display: "Diabetic Ulcer",
                  },
                },
              ],
              answerOption: [
                {
                  valueCoding: {
                    code: "gradeZero",
                    display: "Grade 0",
                  },
                },
                {
                  valueCoding: {
                    code: "gradeOne",
                    display: "Grade 1",
                  },
                },
                {
                  valueCoding: {
                    code: "gradeTwo",
                    display: "Grade 2",
                  },
                },
                {
                  valueCoding: {
                    code: "gradeThree",
                    display: "Grade 3",
                  },
                },
                {
                  valueCoding: {
                    code: "gradeFour",
                    display: "Grade 4",
                  },
                },
                {
                  valueCoding: {
                    code: "gradeFive",
                    display: "Grade 5",
                  },
                },
              ],
            },
          ],
          type: "choice",
          linkId: "8817715790427",
          code: [
            {
              code: "woundType",
            },
          ],
          text: "Wound Type",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "abrasion",
                display: "Abrasion",
              },
            },
            {
              valueCoding: {
                code: "abscess",
                display: "Abscess",
              },
            },
            {
              valueCoding: {
                code: "arterial",
                display: "Arterial Ulcer",
              },
            },
            {
              valueCoding: {
                code: "avulsion",
                display: "Avulsion",
              },
            },
            {
              valueCoding: {
                code: "blister",
                display: "Blister",
              },
            },
            {
              valueCoding: {
                code: "bruise",
                display: "Bruise",
              },
            },
            {
              valueCoding: {
                code: "burn",
                display: "Burn",
              },
            },
            {
              valueCoding: {
                code: "calciphylaxis",
                display: "Calciphylaxis",
              },
            },
            {
              valueCoding: {
                code: "cancerLesion",
                display: "Cancer Lesion",
              },
            },
            {
              valueCoding: {
                code: "cellulitis",
                display: "Cellulitis",
              },
            },
            {
              valueCoding: {
                code: "colostomy",
                display: "Colostomy",
              },
            },
            {
              valueCoding: {
                code: "continentDiversion",
                display: "Continent Diversion",
              },
            },
            {
              valueCoding: {
                code: "dermCondition",
                display: "Dermatologic Condition",
              },
            },
            {
              valueCoding: {
                code: "diabetic",
                display: "Diabetic Ulcer",
              },
            },
            {
              valueCoding: {
                code: "donorSite",
                display: "Donor Site",
              },
            },
            {
              valueCoding: {
                code: "extravasation",
                display: "Extravasation",
              },
            },
            {
              valueCoding: {
                code: "fistula",
                display: "Fistula",
              },
            },
            {
              valueCoding: {
                code: "friction",
                display: "Friction Injury",
              },
            },
            {
              valueCoding: {
                code: "frostBite",
                display: "Frostbite",
              },
            },
            {
              valueCoding: {
                code: "graphSite",
                display: "Graft Site",
              },
            },
            {
              valueCoding: {
                code: "gunshot",
                display: "Gunshot",
              },
            },
            {
              valueCoding: {
                code: "hSuppurtiva",
                display: "Hidradenitis Suppurtiva",
              },
            },
            {
              valueCoding: {
                code: "hematoma",
                display: "Hematoma",
              },
            },
            {
              valueCoding: {
                code: "herpeticLesions",
                display: "Herpetic Lesions",
              },
            },
            {
              valueCoding: {
                code: "iad",
                display: "Incontinence Associated Dermatitis",
              },
            },
            {
              valueCoding: {
                code: "illeostomy",
                display: "Illeostomy",
              },
            },
            {
              valueCoding: {
                code: "incision",
                display: "Incision",
              },
            },
            {
              valueCoding: {
                code: "inflammatory",
                display: "Inflammatory",
              },
            },
            {
              valueCoding: {
                code: "itd",
                display: "Intertriginous Dermatitis",
              },
            },
            {
              valueCoding: {
                code: "laceration",
                display: "Laceration",
              },
            },
            {
              valueCoding: {
                code: "lesion",
                display: "Open Lesion",
              },
            },
            {
              valueCoding: {
                code: "malignant",
                display: "Malignant",
              },
            },
            {
              valueCoding: {
                code: "masd",
                display: "Moisture Associated Skin Damage (MASD)",
              },
            },
            {
              valueCoding: {
                code: "medicalTape",
                display: "Medical Tape Injury",
              },
            },
            {
              valueCoding: {
                code: "mixedArterialVenous",
                display: "Mixed Arterial & Venous Ulcer",
              },
            },
            {
              valueCoding: {
                code: "mole",
                display: "Mole",
              },
            },
            {
              valueCoding: {
                code: "necrotizingFasciitis",
                display: "Necrotizing Fasciitis",
              },
            },
            {
              valueCoding: {
                code: "neuropathic",
                display: "Neuropathic",
              },
            },
            {
              valueCoding: {
                code: "ostomyUnspecified",
                display: "Ostomy: Unspecified",
              },
            },
            {
              valueCoding: {
                code: "pilonidalSinus",
                display: "Pilonidal Sinus",
              },
            },
            {
              valueCoding: {
                code: "pressureDeviceRelated",
                display: "Pressure Injury - Medical Device Related",
              },
            },
            {
              valueCoding: {
                code: "pressureKennedy",
                display: "Pressure Injury - Kennedy Terminal",
              },
            },
            {
              valueCoding: {
                code: "pressureUlcer",
                display: "Pressure Injury",
              },
            },
            {
              valueCoding: {
                code: "pyodermaGangrenosum",
                display: "Pyoderma Gangrenosum",
              },
            },
            {
              valueCoding: {
                code: "radiation",
                display: "Radiation",
              },
            },
            {
              valueCoding: {
                code: "rash",
                display: "Rash/Dermatological",
              },
            },
            {
              valueCoding: {
                code: "shearing",
                display: "Shearing",
              },
            },
            {
              valueCoding: {
                code: "skinGraft",
                display: "Skin Graft",
              },
            },
            {
              valueCoding: {
                code: "skinTear",
                display: "Skin Tear",
              },
            },
            {
              valueCoding: {
                code: "softTissueNecrosis",
                display: "Soft Tissue Necrosis",
              },
            },
            {
              valueCoding: {
                code: "stoma",
                display: "Other Stoma",
              },
            },
            {
              valueCoding: {
                code: "surgical",
                display: "Surgical Incision",
              },
            },
            {
              valueCoding: {
                code: "trauma",
                display: "Trauma",
              },
            },
            {
              valueCoding: {
                code: "urostomy",
                display: "Urostomy",
              },
            },
            {
              valueCoding: {
                code: "vasculitis",
                display: "Vasculitis",
              },
            },
            {
              valueCoding: {
                code: "venous",
                display: "Venous Ulcer",
              },
            },
            {
              valueCoding: {
                code: "vesicostomy",
                display: "Vesicostomy",
              },
            },
            {
              valueCoding: {
                code: "contusion",
                display: "Contusion",
              },
            },
            {
              valueCoding: {
                code: "chronicUlcer",
                display: "ChronicUlcer",
              },
            },
            {
              valueCoding: {
                code: "bullousPemphigold",
                display: "Bullous Pemphigold",
              },
            },
            {
              valueCoding: {
                code: "insectBites",
                display: "Insect Bites",
              },
            },
            {
              valueCoding: {
                code: "punctureWound",
                display: "Puncture Wound",
              },
            },
            {
              valueCoding: {
                code: "unknown",
                display: "Unknown - wound team to evaluate",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "4657290821868",
          code: [
            {
              code: "stagedBy",
            },
          ],
          text: "Staged By",
          required: false,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "stagedByHealthCareProvider",
                display: "Health Care Provider",
              },
            },
            {
              valueCoding: {
                code: "stagedByHomeHealth",
                display: "Home Health",
              },
            },
            {
              valueCoding: {
                code: "stagedByHospice",
                display: "Hospice",
              },
            },
            {
              valueCoding: {
                code: "stagedByInHouseNursing",
                display: "In-House Nursing",
              },
            },
            {
              valueCoding: {
                code: "StagedByWoundClinic",
                display: "Wound Care Clinic",
              },
            },
            {
              valueCoding: {
                code: "stagedByNA",
                display: "N/A",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other (Comment)",
              },
            },
          ],
          item: [
            {
              type: "string",
              linkId: "3701921891343",
              code: [
                {
                  code: "stagedByOther",
                },
              ],
              text: "Staged By - Other (Comment)",
              enableWhen: [
                {
                  question: "4657290821868",
                  operator: "=",
                  answerCoding: {
                    code: "other",
                    display: "Other",
                  },
                },
              ],
            },
          ],
        },
        {
          item: [
            {
              type: "date",
              linkId: "6721316694324",
              code: [
                {
                  code: "woundDate",
                },
              ],
              text: "Exact Date",
              enableWhen: [
                {
                  question: "5871129340086",
                  operator: "=",
                  answerCoding: {
                    code: "date",
                    display: "Exact Date",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
            },
          ],
          type: "choice",
          linkId: "5871129340086",
          code: [
            {
              code: "woundAge",
            },
          ],
          text: "Wound Age (Exact Date)",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "new",
                display: "New",
              },
            },
            {
              valueCoding: {
                code: "date",
                display: "Exact Date",
              },
            },
            {
              valueCoding: {
                code: "oneWeek",
                display: "1 week",
              },
            },
            {
              valueCoding: {
                code: "twoWeeks",
                display: "2 weeks",
              },
            },
            {
              valueCoding: {
                code: "oneMonth",
                display: "1 month",
              },
            },
            {
              valueCoding: {
                code: "threeMonths",
                display: "1 - 3 months",
              },
            },
            {
              valueCoding: {
                code: "sixMonths",
                display: "3 - 6 months",
              },
            },
            {
              valueCoding: {
                code: "nineMonths",
                display: "6 - 9 months",
              },
            },
            {
              valueCoding: {
                code: "twelveMonths",
                display: "9 - 12 months",
              },
            },
            {
              valueCoding: {
                code: "twoYears",
                display: "1 - 2 years",
              },
            },
            {
              valueCoding: {
                code: "chronic",
                display: "Over 2 years",
              },
            },
            {
              valueCoding: {
                code: "unknown",
                display: "Unknown",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "3572357232823",
          code: [
            {
              code: "woundReviewed",
            },
          ],
          text: "Was wound type/stage reviewed",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "yes",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                code: "no",
                display: "No",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "6913044566539",
          code: [
            {
              code: "physicianVerified",
            },
          ],
          text: "Was Wound Etiology Verified?",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "yes",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                code: "none",
                display: "No",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "6829448221934",
          code: [
            {
              code: "inHouseAcquired",
            },
          ],
          text: "Acquired",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "inHouse",
                display: "In-House Acquired",
              },
            },
            {
              valueCoding: {
                code: "externally",
                display: "Present on Admission",
              },
            },
            {
              valueCoding: {
                code: "unknown",
                display: "Unknown",
              },
            },
          ],
        },
      ],
      type: "string",
      linkId: "6388351555391",
      text: "Describe",
    },
    {
      type: "string",
      linkId: "7324611491727",
      text: "Characteristics",
      item: [
        {
          type: "choice",
          linkId: "1132237427371",
          code: [
            {
              code: "odour",
            },
          ],
          text: "Odor after Cleansing",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "absent",
                display: "None",
              },
            },
            {
              valueCoding: {
                code: "faint",
                display: "Faint",
              },
            },
            {
              valueCoding: {
                code: "moderate",
                display: "Moderate",
              },
            },
            {
              valueCoding: {
                code: "strong",
                display: "Strong",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "6521262543507",
          code: [
            {
              code: "signsAndSymptoms",
            },
          ],
          text: "Signs & Symptoms of Infection",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "yes",
                display: "Yes",
              },
            },
            {
              valueCoding: {
                code: "no",
                display: "No",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "2984316965250",
          code: [
            {
              code: "skinColor",
            },
          ],
          text: "Skin Color Surrounding Wound",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "normalColor",
                display: "Pink or normal for ethnic group",
              },
            },
            {
              valueCoding: {
                code: "hyperpigment",
                display: "Black or hyperpigmented",
              },
            },
            {
              valueCoding: {
                code: "erythema",
                display: "Bright red &/or blanches to touch",
              },
            },
            {
              valueCoding: {
                code: "haemosiderin",
                display: "Dark red or purple &/or nonblanchable",
              },
            },
            {
              valueCoding: {
                code: "atropheBlanche",
                display: "White or gray pallor or hypopigmented",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5102280945117",
          code: [
            {
              code: "edema",
            },
          ],
          text: "Edema",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "No swelling or edema",
              },
            },
            {
              valueCoding: {
                code: "underFour",
                display: "Non-pitting edema (less than 4cm)",
              },
            },
            {
              valueCoding: {
                code: "overFour",
                display: "Non-pitting edema (greater than 4cm)",
              },
            },
            {
              valueCoding: {
                code: "pittingUnderFour",
                display: "Pitting edema",
              },
            },
            {
              valueCoding: {
                code: "pittingOverFour",
                display: "Crepitus and/or pitting edema",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5681113122543",
          code: [
            {
              code: "induration",
            },
          ],
          text: "Induration",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "None present",
              },
            },
            {
              valueCoding: {
                code: "underTwo",
                display: "Induration less than 2cm around wound",
              },
            },
            {
              valueCoding: {
                code: "overTwoLessHalf",
                display: "Induration 2-4cm (less than 50%)",
              },
            },
            {
              valueCoding: {
                code: "overTwoGreaterHalf",
                display: "Induration 2-4cm (greater than 50%)",
              },
            },
            {
              valueCoding: {
                code: "overFour",
                display: "Induration greater than 4cm around wound",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5271310537568",
          code: [
            {
              code: "macerated",
            },
          ],
          text: "Maceration",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "None Present",
              },
            },
            {
              valueCoding: {
                code: "present",
                display: "Present",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5349574775586",
          code: [
            {
              code: "woundMargins",
            },
          ],
          text: "Edges",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "distinct",
                display: "Distinct",
              },
            },
            {
              valueCoding: {
                code: "indistinct",
                display: "Indistinct",
              },
            },
            {
              valueCoding: {
                code: "rolledUnder",
                display: "Well-defined, rolled under (epibole)",
              },
            },
            {
              valueCoding: {
                code: "fibrotic",
                display: "Well-defined, fibrotic",
              },
            },
            {
              valueCoding: {
                code: "wellDefined",
                display: "Well-defined, not attached",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5983115816428",
          code: [
            {
              code: "drainExudateType",
            },
          ],
          text: "**Exudate Type",
          enableWhen: [
            {
              question: "3039727970798",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "None",
              },
            },
            {
              valueCoding: {
                code: "serous",
                display: "Serous",
              },
            },
            {
              valueCoding: {
                code: "serosanguinous",
                display: "Serosanguineous",
              },
            },
            {
              valueCoding: {
                code: "sanguinous",
                display: "Bloody",
              },
            },
            {
              valueCoding: {
                code: "purulent",
                display: "Purulent",
              },
            },
          ],
        },
        {
          item: [
            {
              type: "choice",
              linkId: "4471657009524",
              code: [
                {
                  code: "exudateType",
                },
              ],
              text: "Exudate Type",
              enableWhen: [
                {
                  question: "4973904880963",
                  operator: "=",
                  answerCoding: {
                    code: "yes",
                    display: "Yes",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "none",
                    display: "None",
                  },
                },
                {
                  valueCoding: {
                    code: "serous",
                    display: "Serous",
                  },
                },
                {
                  valueCoding: {
                    code: "serosanguinous",
                    display: "Serosanguineous",
                  },
                },
                {
                  valueCoding: {
                    code: "sanguinous",
                    display: "Bloody",
                  },
                },
                {
                  valueCoding: {
                    code: "purulent",
                    display: "Purulent",
                  },
                },
              ],
            },
          ],
          type: "choice",
          linkId: "7318548812492",
          code: [
            {
              code: "exudateAmount",
            },
          ],
          text: "Exudate Amount",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "None",
              },
            },
            {
              valueCoding: {
                code: "scant",
                display: "Scant",
              },
            },
            {
              valueCoding: {
                code: "light",
                display: "Small",
              },
            },
            {
              valueCoding: {
                code: "moderate",
                display: "Moderate",
              },
            },
            {
              valueCoding: {
                code: "large",
                display: "Large",
              },
            },
          ],
        },
        {
          type: "open-choice",
          linkId: "4295060377724",
          code: [
            {
              code: "tissueOther",
            },
          ],
          text: "Wound Bed Other",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "None",
              },
            },
            {
              valueCoding: {
                code: "scab",
                display: "Scab",
              },
            },
            {
              valueCoding: {
                code: "overgranulated",
                display: "Hypergranulated",
              },
            },
            {
              valueCoding: {
                code: "muscle",
                display: "Muscle",
              },
            },
            {
              valueCoding: {
                code: "tendonLigament",
                display: "Tendon",
              },
            },
            {
              valueCoding: {
                code: "bonePalpableVisible",
                display: "Bone",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other (Comment)",
              },
            },
          ],
          item: [
            {
              type: "string",
              linkId: "6844938399259",
              code: [
                {
                  code: "tissueOtherInfo",
                },
              ],
              text: "Other (comment - wound bed)",
              enableWhen: [
                {
                  question: "4295060377724",
                  operator: "=",
                  answerCoding: {
                    display: "Other (Comment)",
                  },
                },
              ],
              enableBehavior: "all",
            },
          ],
        },
        {
          type: "choice",
          linkId: "3426777433083",
          code: [
            {
              code: "tissueDepth",
            },
          ],
          text: "Depth",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "nonBlanchableErythema",
                display: "Non-blanchable erythema on intact skin",
              },
            },
            {
              valueCoding: {
                code: "partialThickness",
                display: "Partial thickness skin loss",
              },
            },
            {
              valueCoding: {
                code: "fullThicknessWithDamage",
                display: "Full thickness skin loss involving damage",
              },
            },
            {
              valueCoding: {
                code: "fullThicknessWithDestruction",
                display: "Full thickness skin loss with extensive destruction",
              },
            },
            {
              valueCoding: {
                code: "necrosis",
                display: "Obscured by necrosis",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "9001810302193",
          code: [
            {
              code: "tissueEschar",
            },
          ],
          text: "Eschar",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "No eschar present",
              },
            },
            {
              valueCoding: {
                code: "tissueEscharAdherantSoftBlack",
                display: "Adherent, soft, black eschar",
              },
            },
            {
              valueCoding: {
                code: "tissueEscharAdherantFirmBlack",
                display: "Firmly adherent, hard, black eschar",
              },
            },
          ],
          item: [
            {
              type: "choice",
              linkId: "8288324395257",
              text: "Eschar %",
              code: [
                {
                  code: "tissueEscharAmount",
                },
              ],
              enableWhen: [
                {
                  question: "9001810302193",
                  operator: "=",
                  answerCoding: {
                    code: "tissueEscharAdherantSoftBlack",
                    display: "Adherent, soft, black eschar",
                  },
                },
                {
                  question: "9001810302193",
                  operator: "=",
                  answerCoding: {
                    code: "tissueEscharAdherantFirmBlack",
                    display: "Firmly adherent, hard, black eschar",
                  },
                },
              ],
              enableBehavior: "any",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "tissueEschar75To100",
                    display: "75% to 100%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueEschar50To75",
                    display: "> 50% and < 75%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueEschar25To50",
                    display: "> 25% and < 50%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueEschar0To25",
                    display: "< 25%",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "choice",
          linkId: "592542478788",
          code: [
            {
              code: "tissueSlough",
            },
          ],
          text: "Slough",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display: "No slough present",
              },
            },
            {
              valueCoding: {
                code: "whiteNonAdherentYellow",
                display: "White/grey non-viable tissue",
              },
            },
            {
              valueCoding: {
                code: "looseAdherentYellow",
                display: "Loosely adherent yellow slough",
              },
            },
          ],
          item: [
            {
              type: "choice",
              linkId: "2936916599665",
              code: [
                {
                  code: "tissueSloughAmount",
                },
              ],
              text: "Slough %",
              enableWhen: [
                {
                  question: "592542478788",
                  operator: "=",
                  answerCoding: {
                    code: "whiteNonAdherentYellow",
                    display: "White/grey non-viable tissue",
                  },
                },
                {
                  question: "592542478788",
                  operator: "=",
                  answerCoding: {
                    code: "looseAdherentYellow",
                    display: "Loosely adherent yellow slough",
                  },
                },
              ],
              enableBehavior: "any",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "tissueSlough75To100",
                    display: "75% to 100%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueSlough50To75",
                    display: "> 50% and < 75%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueSlough25To50",
                    display: "> 25% and < 50%",
                  },
                },
                {
                  valueCoding: {
                    code: "tissueSlough0To25",
                    display: "< 25%",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "choice",
          linkId: "2097830276455",
          code: [
            {
              code: "tissueGranulationAmount",
            },
          ],
          text: "Granulation %",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "tissueGranulation0",
                display: "No granulation tissue present",
              },
            },
            {
              valueCoding: {
                code: "tissueGranulationIntact",
                display: "Skin intact or partial thickness wound",
              },
            },
            {
              valueCoding: {
                code: "tissueGranulation75To100",
                display: "75% to 100%",
              },
            },
            {
              valueCoding: {
                code: "tissueGranulation25To75",
                display: "< 75% & > 25%",
              },
            },
            {
              valueCoding: {
                code: "tissueGranulation0To25",
                display: "<= 25%",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "5142919252090",
          code: [
            {
              code: "tissueEpithelialAmount",
            },
          ],
          text: "Epithelialization %",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "tissueEpithelial100",
                display: "100%",
              },
            },
            {
              valueCoding: {
                code: "tissueEpithelial75To100",
                display: "75% to 100%",
              },
            },
            {
              valueCoding: {
                code: "tissueEpithelial50To75",
                display: "50% to <75%",
              },
            },
            {
              valueCoding: {
                code: "tissueEpithelial25To50",
                display: "25% to < 50%",
              },
            },
            {
              valueCoding: {
                code: "tissueEpithelial0To25",
                display: "< 25%",
              },
            },
          ],
        },
      ],
    },
    {
      item: [
        {
          type: "choice",
          linkId: "4181875177887",
          code: [
            {
              code: "hasWoundPain",
            },
          ],
          text: "Does patient have pain associated with this wound?",
          enableWhen: [
            {
              question: "4973904880963",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "no",
                display: "No",
              },
            },
            {
              valueCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "4820720437727",
          code: [
            {
              code: "surroundingPainFreq",
            },
          ],
          text: "Pain Frequency",
          enableWhen: [
            {
              question: "4181875177887",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display:
                  "Patient has no pain/pain does not interfere with activity",
              },
            },
            {
              valueCoding: {
                code: "notDaily",
                display: "Less often then daily",
              },
            },
            {
              valueCoding: {
                code: "continuous",
                display: "All of the time",
              },
            },
            {
              valueCoding: {
                code: "daily",
                display: "Daily but not constantly",
              },
            },
          ],
          item: [
            {
              type: "choice",
              linkId: "8428976973354",
              code: [
                {
                  code: "painInterventionResponse",
                },
              ],
              text: "Response to pain intervention",
              enableWhen: [
                {
                  question: "4181875177887",
                  operator: "=",
                  answerCoding: {
                    code: "yes",
                    display: "Yes",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "fullRelief",
                    display: "Full relief",
                  },
                },
                {
                  valueCoding: {
                    code: "partialRelief",
                    display: "Partial relief",
                  },
                },
                {
                  valueCoding: {
                    code: "noRelief",
                    display: "No relief",
                  },
                },
                {
                  valueCoding: {
                    code: "unableToVerbalize",
                    display: "Unable to verbalize",
                  },
                },
              ],
            },
            {
              type: "choice",
              linkId: "9735156096330",
              code: [
                {
                  code: "painIntervention",
                },
              ],
              text: "Pain Interventions",
              enableWhen: [
                {
                  question: "4181875177887",
                  operator: "=",
                  answerCoding: {
                    code: "yes",
                    display: "Yes",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "medication",
                    display: "Medication",
                  },
                },
                {
                  valueCoding: {
                    code: "rest",
                    display: "Rest",
                  },
                },
                {
                  valueCoding: {
                    code: "heat",
                    display: "Heat",
                  },
                },
                {
                  valueCoding: {
                    code: "ice",
                    display: "Ice",
                  },
                },
                {
                  valueCoding: {
                    code: "elevation",
                    display: "Elevation",
                  },
                },
                {
                  valueCoding: {
                    code: "other",
                    display: "Other (Comment)",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "string",
          linkId: "8014354414614",
          code: [
            {
              code: "otherPainTypeText",
            },
          ],
          text: "Other (Pain Quality)",
          enableWhen: [
            {
              question: "7693515468320",
              operator: "=",
              answerCoding: {
                display: "Other (Comment)",
              },
            },
          ],
          required: true,
          repeats: false,
          readOnly: false,
        },
        {
          type: "open-choice",
          linkId: "4249960841789",
          code: [
            {
              code: "painIntervention",
            },
          ],
          text: "Pain Interventions",
          enableWhen: [
            {
              question: "2106088381582",
              operator: "=",
              answerCoding: {
                code: "Yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "medication",
                display: "Medication",
              },
            },
            {
              valueCoding: {
                code: "rest",
                display: "Rest",
              },
            },
            {
              valueCoding: {
                code: "heat",
                display: "Heat",
              },
            },
            {
              valueCoding: {
                code: "ice",
                display: "Ice",
              },
            },
            {
              valueCoding: {
                code: "elevation",
                display: "Elevation",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other (Comment)",
              },
            },
          ],
          item: [
            {
              type: "string",
              linkId: "9739582935330",
              code: [
                {
                  code: "otherPainInterventionText",
                },
              ],
              text: "Other (Pain interventions)",
              enableWhen: [
                {
                  question: "4249960841789",
                  operator: "=",
                  answerCoding: {
                    code: "other",
                    display: "Other (Comment)",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
            },
            {
              type: "choice",
              linkId: "7253819155353",
              code: [
                {
                  code: "painInterventionResponse",
                },
              ],
              text: "Response to pain intervention",
              enableWhen: [
                {
                  question: "2106088381582",
                  operator: "=",
                  answerCoding: {
                    code: "Yes",
                    display: "Yes",
                  },
                },
              ],
              enableBehavior: "all",
              required: true,
              repeats: false,
              readOnly: false,
              answerOption: [
                {
                  valueCoding: {
                    code: "fullRelief",
                    display: "Full relief",
                  },
                },
                {
                  valueCoding: {
                    code: "partialRelief",
                    display: "Partial relief",
                  },
                },
                {
                  valueCoding: {
                    code: "noRelief",
                    display: "No relief",
                  },
                },
                {
                  valueCoding: {
                    code: "unableToVerbalize",
                    display: "Unable to verbalize",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "choice",
          linkId: "7693515468320",
          code: [
            {
              code: "painType",
            },
          ],
          text: "Pain Quality",
          enableWhen: [
            {
              question: "4181875177887",
              operator: "exists",
              answerBoolean: true,
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "aching",
                display: "Aching",
              },
            },
            {
              valueCoding: {
                code: "burning",
                display: "Burning",
              },
            },
            {
              valueCoding: {
                code: "cramping",
                display: "Cramping",
              },
            },
            {
              valueCoding: {
                code: "cutting",
                display: "Cutting",
              },
            },
            {
              valueCoding: {
                code: "dull",
                display: "Dull",
              },
            },
            {
              valueCoding: {
                code: "gnawing",
                display: "Gnawing",
              },
            },
            {
              valueCoding: {
                code: "itchiness",
                display: "Itchiness",
              },
            },
            {
              valueCoding: {
                code: "numbness",
                display: "Numbness",
              },
            },
            {
              valueCoding: {
                code: "pressure",
                display: "Pressure",
              },
            },
            {
              valueCoding: {
                code: "sharp",
                display: "Sharp",
              },
            },
            {
              valueCoding: {
                code: "shooting",
                display: "Shooting",
              },
            },
            {
              valueCoding: {
                code: "stabbing",
                display: "Stabbing",
              },
            },
            {
              valueCoding: {
                code: "stinging",
                display: "Stinging",
              },
            },
            {
              valueCoding: {
                code: "tender",
                display: "Tender",
              },
            },
            {
              valueCoding: {
                code: "throbbing",
                display: "Throbbing",
              },
            },
            {
              valueCoding: {
                code: "tight",
                display: "Tight",
              },
            },
            {
              valueCoding: {
                code: "tingling",
                display: "Tingling",
              },
            },
            {
              valueCoding: {
                code: "unableToDescribe",
                display: "Unable to describe",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other (Comment)",
              },
            },
          ],
        },
        {
          item: [
            {
              type: "string",
              linkId: "169778115814",
              text: "Other (Comment)",
              enableWhen: [
                {
                  question: "4276119257741",
                  operator: "=",
                  answerCoding: {
                    code: "other",
                    display: "Other (Comment)",
                  },
                },
              ],
              enableBehavior: "all",
            },
          ],
          type: "choice",
          linkId: "4276119257741",
          code: [
            {
              code: "Pain Quality",
            },
          ],
          text: "Pain Quality",
          enableWhen: [
            {
              question: "2106088381582",
              operator: "=",
              answerCoding: {
                code: "Yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "aching",
                display: "Aching",
              },
            },
            {
              valueCoding: {
                code: "burning",
                display: "Burning",
              },
            },
            {
              valueCoding: {
                code: "cramping",
                display: "Cramping",
              },
            },
            {
              valueCoding: {
                code: "cutting",
                display: "Cutting",
              },
            },
            {
              valueCoding: {
                code: "dull",
                display: "Dull",
              },
            },
            {
              valueCoding: {
                code: "gnawing",
                display: "Gnawing",
              },
            },
            {
              valueCoding: {
                code: "itchiness",
                display: "Itchiness",
              },
            },
            {
              valueCoding: {
                code: "numbness",
                display: "Numbness",
              },
            },
            {
              valueCoding: {
                code: "pressure",
                display: "Pressure",
              },
            },
            {
              valueCoding: {
                code: "sharp",
                display: "Sharp",
              },
            },
            {
              valueCoding: {
                code: "shooting",
                display: "Shooting",
              },
            },
            {
              valueCoding: {
                code: "stabbing",
                display: "Stabbing",
              },
            },
            {
              valueCoding: {
                code: "stinging",
                display: "Stinging",
              },
            },
            {
              valueCoding: {
                code: "tender",
                display: "Tender",
              },
            },
            {
              valueCoding: {
                code: "throbbing",
                display: "Throbbing",
              },
            },
            {
              valueCoding: {
                code: "tight",
                display: "Tight",
              },
            },
            {
              valueCoding: {
                code: "tingling",
                display: "Tingling",
              },
            },
            {
              valueCoding: {
                code: "unableToDescribe",
                display: "Unable to describe",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other (Comment)",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "3952157414121",
          code: [
            {
              code: "surroundingPainFreq",
            },
          ],
          text: "Pain Frequency",
          enableWhen: [
            {
              question: "2106088381582",
              operator: "=",
              answerCoding: {
                code: "Yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "none",
                display:
                  "Patient has no pain/pain does not interfere with activity",
              },
            },
            {
              valueCoding: {
                code: "notDaily",
                display: "Less often then daily",
              },
            },
            {
              valueCoding: {
                code: "continuous",
                display: "All of the time",
              },
            },
            {
              valueCoding: {
                code: "daily",
                display: "Daily but not constantly",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "4459372392180",
          code: [
            {
              code: "woundPain",
            },
          ],
          text: "Pain",
          enableWhen: [
            {
              question: "4181875177887",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "woundPain10",
                display: "10",
              },
            },
            {
              valueCoding: {
                code: "woundPain09",
                display: "9",
              },
            },
            {
              valueCoding: {
                code: "woundPain08",
                display: "8",
              },
            },
            {
              valueCoding: {
                code: "woundPain07",
                display: "7",
              },
            },
            {
              valueCoding: {
                code: "woundPain06",
                display: "6",
              },
            },
            {
              valueCoding: {
                code: "woundPain05",
                display: "5",
              },
            },
            {
              valueCoding: {
                code: "woundPain04",
                display: "4",
              },
            },
            {
              valueCoding: {
                code: "woundPain03",
                display: "3",
              },
            },
            {
              valueCoding: {
                code: "woundPain02",
                display: "2",
              },
            },
            {
              valueCoding: {
                code: "woundPain01",
                display: "1",
              },
            },
            {
              valueCoding: {
                code: "woundPain00",
                display: "0",
              },
            },
          ],
        },
        {
          type: "choice",
          linkId: "6071660476194",
          code: [
            {
              code: "woundPain",
            },
          ],
          text: "Pain ",
          enableWhen: [
            {
              question: "2106088381582",
              operator: "=",
              answerCoding: {
                code: "Yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "woundPain10",
                display: "10",
              },
            },
            {
              valueCoding: {
                code: "woundPain09",
                display: "9",
              },
            },
            {
              valueCoding: {
                code: "woundPain08",
                display: "8",
              },
            },
            {
              valueCoding: {
                code: "woundPain07",
                display: "7",
              },
            },
            {
              valueCoding: {
                code: "woundPain06",
                display: "6",
              },
            },
            {
              valueCoding: {
                code: "woundPain05",
                display: "5",
              },
            },
            {
              valueCoding: {
                code: "woundPain04",
                display: "4",
              },
            },
            {
              valueCoding: {
                code: "woundPain03",
                display: "3",
              },
            },
            {
              valueCoding: {
                code: "woundPain02",
                display: "2",
              },
            },
            {
              valueCoding: {
                code: "woundPain01",
                display: "1",
              },
            },
            {
              valueCoding: {
                code: "woundPain00",
                display: "0",
              },
            },
          ],
          item: [
            {
              text: 'Where 0 = "No pain" and 10 = "Worst possible pain"',
              type: "display",
              linkId: "6071660476194_helpText",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    text: "Help-Button",
                    coding: [
                      {
                        code: "help",
                        display: "Help-Button",
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
      type: "choice",
      linkId: "2106088381582",
      code: [
        {
          code: "hasWoundPain",
        },
      ],
      text: "Does patient have pain associated with this wound?",
      enableWhen: [
        {
          question: "4973904880963",
          operator: "=",
          answerCoding: {
            code: "yes",
            display: "Yes",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: false,
      answerOption: [
        {
          valueCoding: {
            code: "No",
            display: "No",
          },
        },
        {
          valueCoding: {
            code: "Yes",
            display: "Yes",
          },
        },
      ],
    },
    {
      type: "choice",
      linkId: "3039727970798",
      code: [
        {
          code: "drainPresent",
        },
      ],
      text: "Drain Present",
      enableWhen: [
        {
          question: "4973904880963",
          operator: "=",
          answerCoding: {
            code: "yes",
            display: "Yes",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: false,
      answerOption: [
        {
          valueCoding: {
            code: "yes",
            display: "Yes",
          },
        },
        {
          valueCoding: {
            code: "no",
            display: "No",
          },
        },
      ],
      item: [
        {
          type: "choice",
          linkId: "2283410185943",
          code: [
            {
              code: "drainType",
            },
          ],
          text: "Drain Type",
          enableWhen: [
            {
              question: "3039727970798",
              operator: "=",
              answerCoding: {
                code: "yes",
                display: "Yes",
              },
            },
          ],
          enableBehavior: "all",
          required: true,
          repeats: false,
          readOnly: false,
          answerOption: [
            {
              valueCoding: {
                code: "jacksonPratt",
                display: "Jackson-Pratt",
              },
            },
            {
              valueCoding: {
                code: "penrose",
                display: "Penrose",
              },
            },
            {
              valueCoding: {
                code: "hemovac",
                display: "Hemovac",
              },
            },
            {
              valueCoding: {
                code: "sump",
                display: "Sump",
              },
            },
            {
              valueCoding: {
                code: "other",
                display: "Other",
              },
            },
          ],
        },
      ],
    },
    {
      type: "choice",
      linkId: "5605478558119",
      code: [
        {
          code: "overallProgress",
        },
      ],
      text: "Progress",
      required: true,
      repeats: false,
      readOnly: false,
      answerOption: [
        {
          valueCoding: {
            code: "new",
            display: "New",
          },
        },
        {
          valueCoding: {
            code: "better",
            display: "Improving",
          },
        },
        {
          valueCoding: {
            code: "stalled",
            display: "Stalled",
          },
        },
        {
          valueCoding: {
            code: "worse",
            display: "Deteriorating",
          },
        },
        {
          valueCoding: {
            code: "monitoring",
            display: "Monitoring Post Closure",
          },
        },
        {
          valueCoding: {
            code: "healed",
            display: "Resolved",
          },
        },
        {
          valueCoding: {
            code: "unableToObserve",
            display: "Unable to Observe",
          },
        },
      ],
    },
  ],
  resourceType: "Questionnaire",
  title: "Global Questionnaire",
  status: "draft",
};
