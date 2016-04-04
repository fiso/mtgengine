"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProteanHydraBase = require("../setM10/ProteanHydra.js");

class ProteanHydra extends ProteanHydraBase {
  constructor(game) {
    super(game, "Protean Hydra", "Magic 2011", "M11");
  }
}

module.exports = ProteanHydra;
