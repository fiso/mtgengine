"use strict";
const Constants = require ("../../../Constants");
const FabricateBase = require("../setHOP/Fabricate");

class Fabricate extends FabricateBase {
  constructor (game) {
    super(game, "Fabricate", "Magic 2010", "M10");
  }
}

module.exports = Fabricate;
