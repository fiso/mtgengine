"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuChameleon extends Card {
  constructor(game) {
    super(game, "Kavu Chameleon", "Invasion", "INV");
  }
}

module.exports = KavuChameleon;
