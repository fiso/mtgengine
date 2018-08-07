"use strict";
const Constants = require ("../../../Constants");
const MarduShadowspearBase = require("../setFRF/MarduShadowspear");

class MarduShadowspear extends MarduShadowspearBase {
  constructor (game) {
    super(game, "Mardu Shadowspear", "Magic Online Promos", "PRM");
  }
}

module.exports = MarduShadowspear;
