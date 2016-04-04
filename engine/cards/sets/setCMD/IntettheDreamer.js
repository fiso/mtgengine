"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntettheDreamer extends Card {
  constructor(game) {
    super(game, "Intet, the Dreamer", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = IntettheDreamer;
