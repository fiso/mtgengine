"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldedbyFaith extends Card {
  constructor(game) {
    super(game, "Shielded by Faith", "Commander 2015", "C15");
  }
}

module.exports = ShieldedbyFaith;
