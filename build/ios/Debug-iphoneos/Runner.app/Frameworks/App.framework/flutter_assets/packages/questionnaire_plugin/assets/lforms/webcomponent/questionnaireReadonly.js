var questionnaireReadonly = {
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
      readOnly: true,
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
      required: true,
      repeats: false,
      readOnly: true,
    },
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
      required: true,
      repeats: false,
      readOnly: true,
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
    {
      type: "choice",
      linkId: "1631061435904",
      code: [
        {
          code: "woundType",
        },
      ],
      text: "Wound Type",
      required: true,
      repeats: false,
      readOnly: true,
      answerOption: [
        {
          valueCoding: {
            code: "abrasionOnly",
            display: "Abrasion",
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
            code: "burn",
            display: "Burn",
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
            code: "diabetic",
            display: "Diabetic",
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
            code: "hSuppurtiva",
            display: "Hidradenitis Suppurativa",
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
            code: "masd",
            display: "MASD",
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
            code: "pressureUlcer",
            display: "Pressure",
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
            code: "surgical",
            display: "Surgical",
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
            code: "venous",
            display: "Venous",
          },
        },
      ],
    },
    {
      type: "choice",
      linkId: "8222773731288",
      code: [
        {
          code: "pressureUlcerStage",
        },
      ],
      text: "Pressure Stage",
      enableWhen: [
        {
          question: "1631061435904",
          operator: "=",
          answerCoding: {
            code: "pressureUlcer",
            display: "Pressure",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: true,
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
    },
    {
      type: "choice",
      linkId: "7889429659600",
      code: [
        {
          code: "pressureUlcerUnstageableCause",
        },
      ],
      text: "Due to",
      enableWhen: [
        {
          question: "8222773731288",
          operator: "=",
          answerCoding: {
            code: "unstageable",
            display: "Unstageable",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: true,
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
    {
      type: "choice",
      linkId: "9403204844015",
      code: [
        {
          code: "skinTearCategory",
        },
      ],
      text: "Category (Skin Tear)",
      enableWhen: [
        {
          question: "1631061435904",
          operator: "=",
          answerCoding: {
            code: "skinTear",
            display: "Skin Tear",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: true,
      answerOption: [
        {
          valueCoding: {
            code: "type1None",
            display: "No skin loss",
          },
        },
        {
          valueCoding: {
            code: "type2Partial",
            display: "Partial flap loss",
          },
        },
        {
          valueCoding: {
            code: "type3Total",
            display: "Total flap loss",
          },
        },
      ],
    },
    {
      type: "open-choice",
      linkId: "5249898376514",
      text: "Closure Method (wound type = surgical)",
      enableWhen: [
        {
          question: "1631061435904",
          operator: "=",
          answerCoding: {
            code: "surgical",
            display: "Surgical",
          },
        },
      ],
      enableBehavior: "all",
      required: true,
      repeats: false,
      readOnly: true,
      answerOption: [
        {
          valueCoding: {
            code: "none",
            display: "None",
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
            code: "closureSutures",
            display: "Sutures",
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
            code: "closureSteriStrips",
            display: "Steri-Strips",
          },
        },
        {
          valueCoding: {
            code: "closureTissueAdhesives",
            display: "Adhesive closure",
          },
        },
        {
          valueCoding: {
            code: "unableToAccess",
            display: "Unable to assess",
          },
        },
        {
          valueCoding: {
            code: "closureOpen",
            display: "Open",
          },
        },
        {
          valueCoding: {
            code: "closureOther",
            display: "Other",
          },
        },
      ],
    },
    {
      type: "string",
      linkId: "5618110622292",
      code: [
        {
          code: "otherText",
        },
      ],
      text: "Other (Closure method)",
      enableWhen: [
        {
          question: "5249898376514",
          operator: "=",
          answerCoding: {
            code: "closureOther",
            display: "Other",
          },
        },
      ],
      enableBehavior: "all",
      readOnly: true,
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
      readOnly: true,
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
      linkId: "3572357232823",
      code: [
        {
          code: "woundReviewed",
        },
      ],
      text: "Was wound type/stage reviewed",
      required: true,
      repeats: false,
      readOnly: true,
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
      type: "string",
      linkId: "9004218436974",
      code: [
        {
          code: "location",
        },
      ],
      text: "Location",
      required: true,
      repeats: false,
      readOnly: true,
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
      readOnly: true,
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
      ],
    },
    {
      type: "choice",
      linkId: "5871129340086",
      code: [
        {
          code: "woundAge",
        },
      ],
      text: "Wound Age",
      required: true,
      repeats: false,
      readOnly: true,
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
      readOnly: true,
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
      required: true,
      repeats: false,
      readOnly: true,
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
      required: true,
      repeats: false,
      readOnly: true,
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
      required: true,
      repeats: false,
      readOnly: true,
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
    },
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
      readOnly: true,
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
      readOnly: true,
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
    },
    {
      type: "choice",
      linkId: "8288324395257",
      text: "Eschar %",
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
      readOnly: true,
      answerOption: [
        {
          valueCoding: {
            display: "75% to 100%",
          },
        },
        {
          valueCoding: {
            display: "> 50% and < 75%",
          },
        },
        {
          valueCoding: {
            display: "> 25% and < 50%",
          },
        },
        {
          valueCoding: {
            display: "< 25%",
          },
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
      readOnly: true,
      answerOption: [
        {
          valueCoding: {
            code: "tissueDepthIntact",
            display: "Non-blanchable erythema on intact skin",
          },
        },
        {
          valueCoding: {
            code: "tissueDepthPartialThickness",
            display: "Partial thickness skin loss",
          },
        },
        {
          valueCoding: {
            code: "tissueDepthFullThickness",
            display: "Full thickness skin loss involving damage",
          },
        },
        {
          valueCoding: {
            code: "tissueDepthFullWithDamage",
            display: "Full thickness skin loss with extensive destruction",
          },
        },
        {
          valueCoding: {
            code: "tissueDepthObscured",
            display: "Obscured by necrosis",
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
      readOnly: true,
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
    },
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
      readOnly: true,
    },
    {
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
        {
          question: "8222773731288",
          operator: "=",
          answerCoding: {
            code: "dti",
            display: "Deep Tissue Injury",
          },
        },
      ],
      required: true,
      repeats: false,
      readOnly: true,
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
      item: [
        {
          item: [
            {
              type: "display",
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://hl7.org/fhir/questionnaire-item-control",
                        code: "help",
                        display: "Help-Button",
                      },
                    ],
                    text: "Help-Button",
                  },
                },
              ],
              linkId: "6071660476194_helpText",
              text: 'Where 0 = "No pain" and 10 = "Worst possible pain"',
              readOnly: true,
            },
          ],
          type: "choice",
          linkId: "6071660476194",
          code: [
            {
              code: "woundPain",
            },
          ],
          text: "intensity",
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
          readOnly: true,
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
          linkId: "3952157414121",
          code: [
            {
              code: "surroundingPainFreq",
            },
          ],
          text: "Frequency",
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
          readOnly: true,
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
          linkId: "4276119257741",
          code: [
            {
              code: "Pain Quality",
            },
          ],
          text: "Quality",
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
          required: true,
          repeats: false,
          readOnly: true,
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
              type: "open-choice",
              linkId: "4249960841789",
              code: [
                {
                  code: "painIntervention",
                },
              ],
              text: "Intervention",
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
              required: true,
              repeats: false,
              readOnly: true,
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
              readOnly: true,
            },
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
              readOnly: true,
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
              readOnly: true,
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
          type: "group",
          linkId: "f33f4a7a-a975-4ffb-865c-fd1093bcf9ff",
          text: "Pain Interventions",
          required: false,
          readOnly: true,
        },
      ],
      type: "group",
      linkId: "89ca726a-c831-4c43-f8a9-38725567a1cd",
      text: "Pain",
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
      required: false,
      readOnly: true,
    },
    {
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      linkId: "2283410185943",
      code: [
        {
          code: "drainType",
        },
      ],
      text: "**Drain Type",
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
      readOnly: true,
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
    {
      type: "string",
      linkId: "1939748500024",
      code: [
        {
          code: "otherDrainTypeText",
        },
      ],
      text: "Other (Comments)",
      enableWhen: [
        {
          question: "2283410185943",
          operator: "=",
          answerCoding: {
            code: "other",
            display: "Other",
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
      required: true,
      repeats: false,
      readOnly: true,
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
      type: "string",
      linkId: "9050903127357",
      code: [
        {
          code: "exudateAmount",
        },
      ],
      text: "Amount of Drainage",
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
      readOnly: true,
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
            code: "twoToFourUnder50",
            display: "Induration 2-4cm (less than 50%)",
          },
        },
        {
          valueCoding: {
            code: "twoToFourOver50",
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
      required: true,
      repeats: false,
      readOnly: true,
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
      readOnly: true,
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
  ],
  resourceType: "Questionnaire",
  meta: {
    security: [
      {
        system: "urn:oid:2.16.578.1.12.4.1.1.7618",
        code: "3",
        display: "Helsehjelp",
      },
    ],
  },
  title: "Global Questionnaire",
  status: "draft",
  description: "Based on CW Spreadsheet",
};
