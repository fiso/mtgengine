"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sorry extends Card {
  constructor(game) {
    super(game, "Sorry", "Unglued", "UGL");
  }
}

module.exports = Sorry;
