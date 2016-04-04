"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArdentSoldier extends Card {
  constructor(game) {
    super(game, "Ardent Soldier", "Invasion", "INV");
  }
}

module.exports = ArdentSoldier;
