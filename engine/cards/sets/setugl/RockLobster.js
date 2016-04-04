"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockLobster extends Card {
  constructor(game) {
    super(game, "Rock Lobster", "Unglued", "UGL");
  }
}

module.exports = RockLobster;
