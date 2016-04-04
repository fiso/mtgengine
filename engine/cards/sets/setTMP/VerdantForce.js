"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdantForceBase = require("../setC15/VerdantForce.js");

class VerdantForce extends VerdantForceBase {
  constructor(game) {
    super(game, "Verdant Force", "Tempest", "TMP");
  }
}

module.exports = VerdantForce;
