"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveBramble extends Card {
  constructor(game) {
    super(game, "Grave Bramble", "Innistrad", "ISD");
  }
}

module.exports = GraveBramble;
