"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Moonhold extends Card {
  constructor(game) {
    super(game, "Moonhold", "Eventide", "EVE");
  }
}

module.exports = Moonhold;
