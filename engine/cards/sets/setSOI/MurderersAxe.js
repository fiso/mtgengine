"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderersAxe extends Card {
  constructor(game) {
    super(game, "Murderer's Axe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MurderersAxe;
