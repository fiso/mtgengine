"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hovermyr extends Card {
  constructor(game) {
    super(game, "Hovermyr", "New Phyrexia", "NPH");
  }
}

module.exports = Hovermyr;
