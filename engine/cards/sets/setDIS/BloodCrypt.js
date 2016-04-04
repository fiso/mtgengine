"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodCrypt extends Card {
  constructor(game) {
    super(game, "Blood Crypt", "Dissension", "DIS");
  }
}

module.exports = BloodCrypt;
