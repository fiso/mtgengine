"use strict";
const Constants = require ("../../../Constants");
const SurgicalExtractionBase = require("../setpMEI/SurgicalExtraction");

class SurgicalExtraction extends SurgicalExtractionBase {
  constructor (game) {
    super(game, "Surgical Extraction", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SurgicalExtraction;
