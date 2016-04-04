"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Steamclaw extends Card {
  constructor(game) {
    super(game, "Steamclaw", "Odyssey", "ODY");
  }
}

module.exports = Steamclaw;
