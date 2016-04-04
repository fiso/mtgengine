"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Framed extends Card {
  constructor(game) {
    super(game, "Framed!", "Unhinged", "UNH");
  }
}

module.exports = Framed;
