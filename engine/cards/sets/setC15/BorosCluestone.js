"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosCluestone extends Card {
  constructor(game) {
    super(game, "Boros Cluestone", "Commander 2015", "C15");
  }
}

module.exports = BorosCluestone;
