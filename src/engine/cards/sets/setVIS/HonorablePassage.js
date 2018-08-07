"use strict";
const Constants = require ("../../../Constants");
const HonorablePassageBase = require("../setTSB/HonorablePassage");

class HonorablePassage extends HonorablePassageBase {
  constructor (game) {
    super(game, "Honorable Passage", "Visions", "VIS");
  }
}

module.exports = HonorablePassage;
