"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrassSecretary extends Card {
  constructor(game) {
    super(game, "Brass Secretary", "Urza's Destiny", "UDS");
  }
}

module.exports = BrassSecretary;
