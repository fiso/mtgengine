"use strict";
const Constants = require ("../../../Constants");
const MarduShadowspearBase = require("../setFRF/MarduShadowspear");

class MarduShadowspear extends MarduShadowspearBase {
  constructor (game) {
    super(game, "Mardu Shadowspear", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = MarduShadowspear;
