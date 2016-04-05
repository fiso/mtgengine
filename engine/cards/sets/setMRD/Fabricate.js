"use strict";
const Constants = require ("../../../Constants");
const FabricateBase = require("../setM10/Fabricate");

class Fabricate extends FabricateBase {
  constructor(game) {
    super(game, "Fabricate", "Mirrodin", "MRD");
  }
}

module.exports = Fabricate;
