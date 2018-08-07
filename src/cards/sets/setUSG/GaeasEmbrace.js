"use strict";
const Constants = require ("../../../Constants");
const GaeasEmbraceBase = require("../setVMA/GaeasEmbrace");

class GaeasEmbrace extends GaeasEmbraceBase {
  constructor (game) {
    super(game, "Gaea's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = GaeasEmbrace;
