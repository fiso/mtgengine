"use strict";
const Constants = require ("../../../Constants");
const SerrasEmbraceBase = require("../setDD3_DVD/SerrasEmbrace");

class SerrasEmbrace extends SerrasEmbraceBase {
  constructor(game) {
    super(game, "Serra's Embrace", "Seventh Edition", "7ED");
  }
}

module.exports = SerrasEmbrace;
