"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HanweirMilitiaCaptain extends Card {
  constructor(game) {
    super(game, "Hanweir Militia Captain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HanweirMilitiaCaptain;
