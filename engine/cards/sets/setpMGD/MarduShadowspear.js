"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarduShadowspearBase = require("../setFRF/MarduShadowspear.js");

class MarduShadowspear extends MarduShadowspearBase {
  constructor(game) {
    super(game, "Mardu Shadowspear", "Magic Game Day", "pMGD");
  }
}

module.exports = MarduShadowspear;
