"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartwoodGiantBase = require("../setTMP/HeartwoodGiant.js");

class HeartwoodGiant extends HeartwoodGiantBase {
  constructor(game) {
    super(game, "Heartwood Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = HeartwoodGiant;
