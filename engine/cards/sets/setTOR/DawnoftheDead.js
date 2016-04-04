"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DawnoftheDead extends Card {
  constructor(game) {
    super(game, "Dawn of the Dead", "Torment", "TOR");
  }
}

module.exports = DawnoftheDead;
