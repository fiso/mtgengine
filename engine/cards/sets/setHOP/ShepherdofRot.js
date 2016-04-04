"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShepherdofRotBase = require("../setONS/ShepherdofRot.js");

class ShepherdofRot extends ShepherdofRotBase {
  constructor(game) {
    super(game, "Shepherd of Rot", "Planechase", "HOP");
  }
}

module.exports = ShepherdofRot;
