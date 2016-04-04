"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RhysticStudyBase = require("../setCM1/RhysticStudy.js");

class RhysticStudy extends RhysticStudyBase {
  constructor(game) {
    super(game, "Rhystic Study", "Prophecy", "PCY");
  }
}

module.exports = RhysticStudy;
