"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesecratorHag extends Card {
  constructor(game) {
    super(game, "Desecrator Hag", "Eventide", "EVE");
  }
}

module.exports = DesecratorHag;
