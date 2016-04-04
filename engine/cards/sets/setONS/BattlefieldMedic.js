"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlefieldMedic extends Card {
  constructor(game) {
    super(game, "Battlefield Medic", "Onslaught", "ONS");
  }
}

module.exports = BattlefieldMedic;
