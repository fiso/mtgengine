"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimAbomination extends Card {
  constructor(game) {
    super(game, "Nim Abomination", "Darksteel", "DST");
  }
}

module.exports = NimAbomination;
