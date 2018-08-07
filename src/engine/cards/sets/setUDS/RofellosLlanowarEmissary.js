"use strict";
const Constants = require ("../../../Constants");
const RofellosLlanowarEmissaryBase = require("../setVMA/RofellosLlanowarEmissary");

class RofellosLlanowarEmissary extends RofellosLlanowarEmissaryBase {
  constructor (game) {
    super(game, "Rofellos, Llanowar Emissary", "Urza's Destiny", "UDS");
  }
}

module.exports = RofellosLlanowarEmissary;
