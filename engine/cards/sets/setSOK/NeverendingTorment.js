"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeverendingTorment extends Card {
  constructor(game) {
    super(game, "Neverending Torment", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = NeverendingTorment;
