"use strict";
const Constants = require ("../../../Constants");
const EssenceExtractionBase = require("../setKLD/EssenceExtraction");

class EssenceExtraction extends EssenceExtractionBase {
  constructor (game) {
    super(game, "Essence Extraction", "Kaladesh Promos", "PKLD");
  }
}

module.exports = EssenceExtraction;
