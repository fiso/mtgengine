"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nucklavee extends Card {
  constructor(game) {
    super(game, "Nucklavee", "Eventide", "EVE");
  }
}

module.exports = Nucklavee;
