"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicGift extends Card {
  constructor(game) {
    super(game, "Angelic Gift", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AngelicGift;
