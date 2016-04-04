"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruMender extends Card {
  constructor(game) {
    super(game, "Daru Mender", "Legions", "LGN");
  }
}

module.exports = DaruMender;
