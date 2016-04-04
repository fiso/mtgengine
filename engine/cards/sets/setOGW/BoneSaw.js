"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneSawBase = require("../setCON/BoneSaw.js");

class BoneSaw extends BoneSawBase {
  constructor(game) {
    super(game, "Bone Saw", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BoneSaw;
