"use strict";
const Constants = require ("../../../Constants");
const FabricateBase = require("../setHOP/Fabricate");

class Fabricate extends FabricateBase {
  constructor (game) {
    super(game, "Fabricate", "Mirrodin", "MRD");
  }
}

module.exports = Fabricate;
