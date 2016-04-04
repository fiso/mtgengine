"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuHowler extends Card {
  constructor(game) {
    super(game, "Kavu Howler", "Apocalypse", "APC");
  }
}

module.exports = KavuHowler;
