"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagisterofWorthBase = require("../setCNS/MagisterofWorth.js");

class MagisterofWorth extends MagisterofWorthBase {
  constructor(game) {
    super(game, "Magister of Worth", "Media Inserts", "pMEI");
  }
}

module.exports = MagisterofWorth;
