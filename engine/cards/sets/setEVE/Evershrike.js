"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Evershrike extends Card {
  constructor(game) {
    super(game, "Evershrike", "Eventide", "EVE");
  }
}

module.exports = Evershrike;
