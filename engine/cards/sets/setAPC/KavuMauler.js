"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuMauler extends Card {
  constructor(game) {
    super(game, "Kavu Mauler", "Apocalypse", "APC");
  }
}

module.exports = KavuMauler;
