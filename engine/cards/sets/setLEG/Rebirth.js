"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RebirthBase = require("../set4ED/Rebirth.js");

class Rebirth extends RebirthBase {
  constructor(game) {
    super(game, "Rebirth", "Legends", "LEG");
  }
}

module.exports = Rebirth;
