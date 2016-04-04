"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordoftheAges extends Card {
  constructor(game) {
    super(game, "Sword of the Ages", "Legends", "LEG");
  }
}

module.exports = SwordoftheAges;
