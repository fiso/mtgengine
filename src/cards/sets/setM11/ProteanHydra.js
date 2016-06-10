"use strict";
const Constants = require ("../../../Constants");
const ProteanHydraBase = require("../setM10/ProteanHydra");

class ProteanHydra extends ProteanHydraBase {
  constructor (game) {
    super(game, "Protean Hydra", "Magic 2011", "M11");
  }
}

module.exports = ProteanHydra;
