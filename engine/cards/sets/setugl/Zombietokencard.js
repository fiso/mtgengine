"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Zombietokencard extends Card {
  constructor(game) {
    super(game, "Zombie token card", "Unglued", "UGL");
  }
}

module.exports = Zombietokencard;
