"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyChamberBase = require("../setDDF/EnergyChamber.js");

class EnergyChamber extends EnergyChamberBase {
  constructor(game) {
    super(game, "Energy Chamber", "Fifth Dawn", "5DN");
  }
}

module.exports = EnergyChamber;
