"use strict";
const Constants = require ("../../../Constants");
const SurgicalExtractionBase = require("../setMM2/SurgicalExtraction");

class SurgicalExtraction extends SurgicalExtractionBase {
  constructor (game) {
    super(game, "Surgical Extraction", "Magic Online Promos", "PRM");
  }
}

module.exports = SurgicalExtraction;
