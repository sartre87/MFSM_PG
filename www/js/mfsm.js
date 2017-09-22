// Contains JavaScript functions used by the MMFSM application.

// ************************************
// Sets the text for all pages.       *
// ************************************
function setText() {
    // SECTION 0: HOME
    document.getElementById("aboutBTN").innerHTML = about_text;
    document.getElementById("toursBTN").innerHTML = tours_text;
    document.getElementById("supportBTN").innerHTML = support_text;
    document.getElementById("socialBTN").innerHTML = social_text;
    
    // SECTION 1: ABOUT
    document.getElementById("missionBTN").innerHTML = mission_text_lc;
    document.getElementById("biographyBTN").innerHTML = biography_text_lc;
    document.getElementById("historyBTN").innerHTML = history_text_lc;

    // SECTION 1.1: MISSION
    document.getElementById("mission_text").innerHTML = mission_text_uc;
    document.getElementById("mission_statement").innerHTML = mission_statement;
    document.getElementById("mission_body").innerHTML = mission_body;
    document.getElementById("mission_bp1").innerHTML = mission_bp1;
    document.getElementById("mission_bp2").innerHTML = mission_bp2;
    document.getElementById("mission_bp3").innerHTML = mission_bp3;
    document.getElementById("mission_bp4").innerHTML = mission_bp4;
    document.getElementById("mission_bp5").innerHTML = mission_bp5;
    document.getElementById("mission_bp6").innerHTML = mission_bp6;
    document.getElementById("mission_bp7").innerHTML = mission_bp7;

    // SECTION 1.2: BIOGRAPHY
    document.getElementById("biography_header").innerHTML = biography_header;
    document.getElementById("biography_text").innerHTML = biography_text_uc;
    document.getElementById("biography_name").innerHTML = biography_name;
    document.getElementById("biography_body").innerHTML = biography_body;

    // SECTION 1.3: HISTORY
    document.getElementById("history_header_1").innerHTML = museum_text + " " + history_text_uc;
    document.getElementById("history_body").innerHTML = history_body;

    // SECTION 2: TOURS
    document.getElementById("tours_text").innerHTML = tours_text;
    document.getElementById("museumHours_text").innerHTML = museumHours_text;
    document.getElementById("museumHours").innerHTML = museumHours;
    document.getElementById("admission").innerHTML = admission;
    document.getElementById("exhibitsBTN").innerHTML = exhibits_text;
    document.getElementById("mapsBTN").innerHTML = maps_text;

    // SECTION 2.1: EXHIBITS
    document.getElementById("mainExhibitBTN").innerHTML = main_exhibit_text;
    document.getElementById("temporaryExhibitBTN").innerHTML = temporary_exhibit_text;
    document.getElementById("scultorsStudioBTN").innerHTML = sculptors_studio_text;
    document.getElementById("sculptureGardenBTN").innerHTML = sculpture_garden_text;

    // SECTION 2.1.1: MAIN EXHIBIT
    document.getElementById("mainExhibit_header_1").innerHTML = main_text + " " + exhibit_text;
    document.getElementById("mainExhibit_body").innerHTML = mainExhibit_body;
    document.getElementById("mainExhibit_gallery").innerHTML = gallery_text;

    // SECTION 2.1.1.01: MAIN EXHIBIT 01
    document.getElementById("me_1_title").innerHTML = me_1_title;
    document.getElementById("me_1_info").innerHTML = me_1_info;
    document.getElementById("me_1_body").innerHTML = me_1_body;
    document.getElementById("me_1_annot").innerHTML = me_1_annot;
    
    // SECTION 2.1.1.02: MAIN EXHIBIT 02
    document.getElementById("me_2_title").innerHTML = me_2_title;
    document.getElementById("me_2_info").innerHTML = me_2_info;
    document.getElementById("me_2_body").innerHTML = me_2_body;
    document.getElementById("me_2_annot").innerHTML = me_2_annot;
    
    // SECTION 2.1.1.03: MAIN EXHIBIT 03
    document.getElementById("me_3_title").innerHTML = me_3_title;
    document.getElementById("me_3_info").innerHTML = me_3_info;
    document.getElementById("me_3_body").innerHTML = me_3_body;
    document.getElementById("me_3_annot").innerHTML = me_3_annot;
    
    // SECTION 2.1.1.04: MAIN EXHIBIT 04
    document.getElementById("me_4_title").innerHTML = me_4_title;
    document.getElementById("me_4_info").innerHTML = me_4_info;
    document.getElementById("me_4_body").innerHTML = me_4_body;
    document.getElementById("me_4_annot").innerHTML = me_4_annot;
    
    // SECTION 2.1.1.05: MAIN EXHIBIT 05
    document.getElementById("me_5_title").innerHTML = me_5_title;
    document.getElementById("me_5_info").innerHTML = me_5_info;
    document.getElementById("me_5_body").innerHTML = me_5_body;
    document.getElementById("me_5_annot").innerHTML = me_5_annot;
    
    // SECTION 2.1.1.06: MAIN EXHIBIT 06
    document.getElementById("me_6_title").innerHTML = me_6_title;
    document.getElementById("me_6_info").innerHTML = me_6_info;
    document.getElementById("me_6_body").innerHTML = me_6_body;
    document.getElementById("me_6_annot").innerHTML = me_6_annot;
    
    // SECTION 2.1.1.07: MAIN EXHIBIT 07
    document.getElementById("me_7_title").innerHTML = me_8_title;
    document.getElementById("me_7_info").innerHTML = me_8_info;
    document.getElementById("me_7_body").innerHTML = me_8_body;
    document.getElementById("me_7_annot").innerHTML = me_8_annot;
    
    // SECTION 2.1.1.08: MAIN EXHIBIT 08
    document.getElementById("me_8_title").innerHTML = me_8_title;
    document.getElementById("me_8_info").innerHTML = me_8_info;
    document.getElementById("me_8_body").innerHTML = me_8_body;
    document.getElementById("me_8_annot").innerHTML = me_8_annot;
    
    // SECTION 2.1.1.01: MAIN EXHIBIT 09
    document.getElementById("me_9_title").innerHTML = me_9_title;
    document.getElementById("me_9_info").innerHTML = me_9_info;
    document.getElementById("me_9_body").innerHTML = me_9_body;
    document.getElementById("me_9_annot").innerHTML = me_9_annot;
    
    // SECTION 2.1.1.10: MAIN EXHIBIT 10
    document.getElementById("me_10_title").innerHTML = me_10_title;
    document.getElementById("me_10_info").innerHTML = me_10_info;
    document.getElementById("me_10_body").innerHTML = me_10_body;
    document.getElementById("me_10_annot").innerHTML = me_10_annot;
    
    // SECTION 2.1.1.11: MAIN EXHIBIT 11
    document.getElementById("me_11_title").innerHTML = me_11_title;
    document.getElementById("me_11_info").innerHTML = me_11_info;
    document.getElementById("me_11_body").innerHTML = me_11_body;
    document.getElementById("me_11_annot").innerHTML = me_11_annot;
    
    // SECTION 2.1.1.01: MAIN EXHIBIT 01
    document.getElementById("me_12_title").innerHTML = me_12_title;
    document.getElementById("me_12_info").innerHTML = me_12_info;
    document.getElementById("me_12_body").innerHTML = me_12_body;
    document.getElementById("me_12_annot").innerHTML = me_12_annot;
    
    // SECTION 2.1.1.13: MAIN EXHIBIT 13
    document.getElementById("me_13_title").innerHTML = me_13_title;
    document.getElementById("me_13_info").innerHTML = me_13_info;
    document.getElementById("me_13_body").innerHTML = me_13_body;
    document.getElementById("me_13_annot").innerHTML = me_13_annot;
    
    // SECTION 2.1.1.14: MAIN EXHIBIT 14
    document.getElementById("me_14_title").innerHTML = me_14_title;
    document.getElementById("me_14_info").innerHTML = me_14_info;
    document.getElementById("me_14_body").innerHTML = me_14_body;
    document.getElementById("me_14_annot").innerHTML = me_14_annot;
    
    // SECTION 2.1.1.15: MAIN EXHIBIT 15
    document.getElementById("me_15_title").innerHTML = me_15_title;
    document.getElementById("me_15_info").innerHTML = me_15_info;
    document.getElementById("me_15_body").innerHTML = me_15_body;
    document.getElementById("me_15_annot").innerHTML = me_15_annot;
    
    // SECTION 2.1.1.01: MAIN EXHIBIT 16
    document.getElementById("me_16_title").innerHTML = me_16_title;
    document.getElementById("me_16_info").innerHTML = me_16_info;
    document.getElementById("me_16_body").innerHTML = me_16_body;
    document.getElementById("me_16_annot").innerHTML = me_16_annot;
    
    // SECTION 2.1.1.01: MAIN EXHIBIT 17
    document.getElementById("me_17_title").innerHTML = me_17_title;
    document.getElementById("me_17_info").innerHTML = me_17_info;
    document.getElementById("me_17_body").innerHTML = me_17_body;
    document.getElementById("me_17_annot").innerHTML = me_17_annot;
    
    // SECTION 2.1.1.01: MAIN EXHIBIT 01
    document.getElementById("me_18_title").innerHTML = me_18_title;
    document.getElementById("me_18_info").innerHTML = me_18_info;
    document.getElementById("me_18_body").innerHTML = me_18_body;
    document.getElementById("me_18_annot").innerHTML = me_18_annot;
    
    // SECTION 2.1.1.19: MAIN EXHIBIT 19
    document.getElementById("me_19_title").innerHTML = me_19_title;
    document.getElementById("me_19_info").innerHTML = me_19_info;
    document.getElementById("me_19_body").innerHTML = me_19_body;
    document.getElementById("me_19_annot").innerHTML = me_19_annot;
    
    // SECTION 2.1.1.20: MAIN EXHIBIT 20
    document.getElementById("me_20_title").innerHTML = me_20_title;
    document.getElementById("me_20_info").innerHTML = me_20_info;
    document.getElementById("me_20_body").innerHTML = me_20_body;
    document.getElementById("me_20_annot").innerHTML = me_20_annot;

    // SECTION 2.1.2: TEMPORARY EXHIBIT

    // SECTION 2.1.2.1: TEMPORARY EXHIBIT 01

    // SECTION 2.1.3: SCULPTORS STUDIO
    document.getElementById("ss_header").innerHTML = ss_title;
    document.getElementById("mission_text").innerHTML = mission_text_uc;
    document.getElementById("ss_title").innerHTML = ss_introduction_header;
    document.getElementById("ss_body").innerHTML = ss_instuduction_body;
    document.getElementById("pantographBTN").innerHTML = ss_pantograph_button;
    document.getElementById("byronBTN").innerHTML = ss_byron_button;

    // SECTION 2.1.3.1: SCULPTORS STUDIO - PANTOGRAPH
    document.getElementById("ss_pantograph_header").innerHTML = ss_pantograph_header;
    document.getElementById("ss_pantograph_body").innerHTML = ss_pantograph_body;

    // SECTION 2.1.4: SCULPTURE GARDEN
    document.getElementById("sculpture_garden_header_1").innerHTML = sculpture_text + " " + garden_text;
    document.getElementById("sculpture_garden_gallery").innerHTML = gallery_text;
    
    // SECTION 2.1.4.01: SCULPTURE GARDEN 01
    document.getElementById("sg_1_title").innerHTML = sg_1_title;
    document.getElementById("sg_1_info").innerHTML = sg_1_info;
    document.getElementById("sg_1_body").innerHTML = sg_1_body;
    document.getElementById("sg_1_annot").innerHTML = sg_1_annot;
    
    // SECTION 2.1.4.02: SCULPTURE GARDEN 02
    document.getElementById("sg_2_title").innerHTML = sg_2_title;
    document.getElementById("sg_2_info").innerHTML = sg_2_info;
    document.getElementById("sg_2_body").innerHTML = sg_2_body;
    document.getElementById("sg_2_annot").innerHTML = sg_2_annot;
    
    // SECTION 2.1.4.03: SCULPTURE GARDEN 03
    document.getElementById("sg_3_title").innerHTML = sg_3_title;
    document.getElementById("sg_3_info").innerHTML = sg_3_info;
    document.getElementById("sg_3_body").innerHTML = sg_3_body;
    document.getElementById("sg_3_annot").innerHTML = sg_3_annot;
    
    // SECTION 2.1.4.04: SCULPTURE GARDEN 04
    document.getElementById("sg_4_title").innerHTML = sg_4_title;
    document.getElementById("sg_4_info").innerHTML = sg_4_info;
    document.getElementById("sg_4_body").innerHTML = sg_4_body;
    document.getElementById("sg_4_annot").innerHTML = sg_4_annot;
    
    // SECTION 2.1.4.05: SCULPTURE GARDEN 05
    document.getElementById("sg_5_title").innerHTML = sg_5_title;
    document.getElementById("sg_5_info").innerHTML = sg_5_info;
    document.getElementById("sg_5_body").innerHTML = sg_5_body;
    document.getElementById("sg_5_annot").innerHTML = sg_5_annot;
    
    // SECTION 2.1.4.06: SCULPTURE GARDEN 06
    document.getElementById("sg_6_title").innerHTML = sg_6_title;
    document.getElementById("sg_6_info").innerHTML = sg_6_info;
    document.getElementById("sg_6_body").innerHTML = sg_6_body;
    document.getElementById("sg_6_annot").innerHTML = sg_6_annot;
    
    // SECTION 2.1.4.07: SCULPTURE GARDEN 07
    document.getElementById("sg_7_title").innerHTML = sg_7_title;
    document.getElementById("sg_7_info").innerHTML = sg_7_info;
    document.getElementById("sg_7_body").innerHTML = sg_7_body;
    document.getElementById("sg_7_annot").innerHTML = sg_7_annot;
    
    // SECTION 2.1.4.08: SCULPTURE GARDEN 08
    document.getElementById("sg_8_title").innerHTML = sg_8_title;
    document.getElementById("sg_8_info").innerHTML = sg_8_info;
    document.getElementById("sg_8_body").innerHTML = sg_8_body;
    document.getElementById("sg_8_annot").innerHTML = sg_8_annot;
    
    // SECTION 2.1.4.09: SCULPTURE GARDEN 09
    document.getElementById("sg_9_title").innerHTML = sg_9_title;
    document.getElementById("sg_9_info").innerHTML = sg_9_info;
    document.getElementById("sg_9_body").innerHTML = sg_9_body;
    document.getElementById("sg_9_annot").innerHTML = sg_9_annot;
    
    // SECTION 2.1.4.10: SCULPTURE GARDEN 10
    document.getElementById("sg_10_title").innerHTML = sg_10_title;
    document.getElementById("sg_10_info").innerHTML = sg_10_info;
    document.getElementById("sg_10_body").innerHTML = sg_10_body;
    document.getElementById("sg_10_annot").innerHTML = sg_10_annot;
    
    // SECTION 2.1.4.11: SCULPTURE GARDEN 11
    document.getElementById("sg_11_title").innerHTML = sg_11_title;
    document.getElementById("sg_11_info").innerHTML = sg_11_info;
    document.getElementById("sg_11_body").innerHTML = sg_11_body;
    document.getElementById("sg_11_annot").innerHTML = sg_11_annot;
    
    // SECTION 2.1.4.12: SCULPTURE GARDEN 12
    document.getElementById("sg_12_title").innerHTML = sg_12_title;
    document.getElementById("sg_12_info").innerHTML = sg_12_info;
    document.getElementById("sg_12_body").innerHTML = sg_12_body;
    document.getElementById("sg_12_annot").innerHTML = sg_12_annot;
    
    // SECTION 2.1.4.13: SCULPTURE GARDEN 13
    document.getElementById("sg_13_title").innerHTML = sg_13_title;
    document.getElementById("sg_13_info").innerHTML = sg_13_info;
    document.getElementById("sg_13_body").innerHTML = sg_13_body;
    document.getElementById("sg_13_annot").innerHTML = sg_13_annot;
    
    // SECTION 2.1.4.14: SCULPTURE GARDEN 14
    document.getElementById("sg_14_title").innerHTML = sg_14_title;
    document.getElementById("sg_14_info").innerHTML = sg_14_info;
    document.getElementById("sg_14_body").innerHTML = sg_14_body;
    document.getElementById("sg_14_annot").innerHTML = sg_14_annot;
    
    // SECTION 2.1.4.15: SCULPTURE GARDEN 15
    document.getElementById("sg_15_title").innerHTML = sg_15_title;
    document.getElementById("sg_15_info").innerHTML = sg_15_info;
    document.getElementById("sg_15_body").innerHTML = sg_15_body;
    document.getElementById("sg_15_annot").innerHTML = sg_15_annot;

    // SECTION 2.2: KIDS

    // SECTION 2.3: MAPS
    document.getElementById("maps_text").innerHTML = maps_text;
    document.getElementById("indoorMapBTN").innerHTML = indoor_map_text;
    document.getElementById("outdoorMapBTN").innerHTML = outdoor_map_text;
    
    // SECTION 4: SOCIAL
    document.getElementById("socialHeader").innerHTML = social_header;
    document.getElementById("socialBody").innerHTML = social_body;
}