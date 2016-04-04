"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeadtoHead extends Card {
  constructor(game) {
    super(game, "Head to Head", "Unhinged", "UNH");
  }
}

module.exports = HeadtoHead;
