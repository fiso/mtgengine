"use strict";
const Constants = require ("../../../Constants");
const ProteanHydraBase = require("../setM11/ProteanHydra");

class ProteanHydra extends ProteanHydraBase {
  constructor (game) {
    super(game, "Protean Hydra", "Magic 2010", "M10");
  }
}

module.exports = ProteanHydra;
