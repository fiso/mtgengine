"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MishrasBauble extends Card {
  constructor(game) {
    super(game, "Mishra's Bauble", "Coldsnap", "CSP");
  }
}

module.exports = MishrasBauble;
