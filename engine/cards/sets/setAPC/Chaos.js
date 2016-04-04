"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chaos extends Card {
  constructor(game) {
    super(game, "Chaos", "Apocalypse", "APC");
  }
}

module.exports = Chaos;
