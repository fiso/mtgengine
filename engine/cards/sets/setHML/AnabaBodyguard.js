"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnabaBodyguardBase = require("../set6ED/AnabaBodyguard.js");

class AnabaBodyguard extends AnabaBodyguardBase {
  constructor(game) {
    super(game, "Anaba Bodyguard", "Homelands", "HML");
  }
}

module.exports = AnabaBodyguard;
