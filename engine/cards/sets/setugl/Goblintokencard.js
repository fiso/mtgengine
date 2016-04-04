"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Goblintokencard extends Card {
  constructor(game) {
    super(game, "Goblin token card", "Unglued", "UGL");
  }
}

module.exports = Goblintokencard;
