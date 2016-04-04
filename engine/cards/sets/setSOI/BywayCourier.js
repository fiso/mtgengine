"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BywayCourier extends Card {
  constructor(game) {
    super(game, "Byway Courier", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BywayCourier;
