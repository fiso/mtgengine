"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesperateRavingsBase = require("../setC15/DesperateRavings.js");

class DesperateRavings extends DesperateRavingsBase {
  constructor(game) {
    super(game, "Desperate Ravings", "Innistrad", "ISD");
  }
}

module.exports = DesperateRavings;
