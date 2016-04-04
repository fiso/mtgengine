"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuggedPrairie extends Card {
  constructor(game) {
    super(game, "Rugged Prairie", "Eventide", "EVE");
  }
}

module.exports = RuggedPrairie;
