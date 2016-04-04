"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalAbomination extends Card {
  constructor(game) {
    super(game, "Phantasmal Abomination", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PhantasmalAbomination;
