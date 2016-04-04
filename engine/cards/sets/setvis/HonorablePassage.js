"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HonorablePassageBase = require("../setTSB/HonorablePassage.js");

class HonorablePassage extends HonorablePassageBase {
  constructor(game) {
    super(game, "Honorable Passage", "Visions", "VIS");
  }
}

module.exports = HonorablePassage;
