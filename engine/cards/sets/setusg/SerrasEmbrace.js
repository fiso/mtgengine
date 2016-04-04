"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerrasEmbraceBase = require("../setDD3_DVD/SerrasEmbrace.js");

class SerrasEmbrace extends SerrasEmbraceBase {
  constructor(game) {
    super(game, "Serra's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = SerrasEmbrace;
