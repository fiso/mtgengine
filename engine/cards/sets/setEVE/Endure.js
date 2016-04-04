"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Endure extends Card {
  constructor(game) {
    super(game, "Endure", "Eventide", "EVE");
  }
}

module.exports = Endure;
