"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InsideOut extends Card {
  constructor(game) {
    super(game, "Inside Out", "Eventide", "EVE");
  }
}

module.exports = InsideOut;
