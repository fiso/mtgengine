"use strict";
const Constants = require ("../../../Constants");
const ShepherdofRotBase = require("../setONS/ShepherdofRot");

class ShepherdofRot extends ShepherdofRotBase {
  constructor(game) {
    super(game, "Shepherd of Rot", "Planechase", "HOP");
  }
}

module.exports = ShepherdofRot;
