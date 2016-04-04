"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatapultSquad extends Card {
  constructor(game) {
    super(game, "Catapult Squad", "Onslaught", "ONS");
  }
}

module.exports = CatapultSquad;
