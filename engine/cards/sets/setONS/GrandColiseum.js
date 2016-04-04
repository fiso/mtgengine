"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrandColiseum extends Card {
  constructor(game) {
    super(game, "Grand Coliseum", "Onslaught", "ONS");
  }
}

module.exports = GrandColiseum;
