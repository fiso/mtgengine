"use strict";
const Constants = require ("../../../Constants");
const RofellosLlanowarEmissaryBase = require("../setUDS/RofellosLlanowarEmissary");

class RofellosLlanowarEmissary extends RofellosLlanowarEmissaryBase {
  constructor (game) {
    super(game, "Rofellos, Llanowar Emissary", "Vintage Masters", "VMA");
  }
}

module.exports = RofellosLlanowarEmissary;
