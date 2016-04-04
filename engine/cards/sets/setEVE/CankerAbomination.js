"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CankerAbomination extends Card {
  constructor(game) {
    super(game, "Canker Abomination", "Eventide", "EVE");
  }
}

module.exports = CankerAbomination;
