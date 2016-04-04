"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreetWraith extends Card {
  constructor(game) {
    super(game, "Street Wraith", "Future Sight", "FUT");
  }
}

module.exports = StreetWraith;
