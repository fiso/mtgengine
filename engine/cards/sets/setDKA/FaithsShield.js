"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaithsShield extends Card {
  constructor(game) {
    super(game, "Faith's Shield", "Dark Ascension", "DKA");
  }
}

module.exports = FaithsShield;
