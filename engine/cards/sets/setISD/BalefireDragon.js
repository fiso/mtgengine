"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalefireDragon extends Card {
  constructor(game) {
    super(game, "Balefire Dragon", "Innistrad", "ISD");
  }
}

module.exports = BalefireDragon;
