"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShockTroops extends Card {
  constructor(game) {
    super(game, "Shock Troops", "Eighth Edition", "8ED");
  }
}

module.exports = ShockTroops;
