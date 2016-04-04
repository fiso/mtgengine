"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasArmor extends Card {
  constructor(game) {
    super(game, "Urza's Armor", "Eighth Edition", "8ED");
  }
}

module.exports = UrzasArmor;
