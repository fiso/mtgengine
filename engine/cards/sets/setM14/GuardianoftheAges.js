"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianoftheAges extends Card {
  constructor(game) {
    super(game, "Guardian of the Ages", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GuardianoftheAges;
