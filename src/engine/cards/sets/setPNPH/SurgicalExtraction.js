"use strict";
const Constants = require ("../../../Constants");
const SurgicalExtractionBase = require("../setMM2/SurgicalExtraction");

class SurgicalExtraction extends SurgicalExtractionBase {
  constructor (game) {
    super(game, "Surgical Extraction", "New Phyrexia Promos", "PNPH");
  }
}

module.exports = SurgicalExtraction;
