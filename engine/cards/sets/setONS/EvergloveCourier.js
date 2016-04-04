"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvergloveCourier extends Card {
  constructor(game) {
    super(game, "Everglove Courier", "Onslaught", "ONS");
  }
}

module.exports = EvergloveCourier;
