"use strict";
const Constants = require ("../../../Constants");
const ShepherdofRotBase = require("../setHOP/ShepherdofRot");

class ShepherdofRot extends ShepherdofRotBase {
  constructor (game) {
    super(game, "Shepherd of Rot", "Onslaught", "ONS");
  }
}

module.exports = ShepherdofRot;
