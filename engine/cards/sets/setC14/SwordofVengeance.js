"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordofVengeance extends Card {
  constructor(game) {
    super(game, "Sword of Vengeance", "Commander 2014", "C14");
  }
}

module.exports = SwordofVengeance;
