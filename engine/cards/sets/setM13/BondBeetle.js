"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BondBeetle extends Card {
  constructor(game) {
    super(game, "Bond Beetle", "Magic 2013", "M13");
  }
}

module.exports = BondBeetle;
