"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalefireLiege extends Card {
  constructor(game) {
    super(game, "Balefire Liege", "Eventide", "EVE");
  }
}

module.exports = BalefireLiege;
