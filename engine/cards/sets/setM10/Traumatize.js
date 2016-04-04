"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Traumatize extends Card {
  constructor(game) {
    super(game, "Traumatize", "Magic 2010", "M10");
  }
}

module.exports = Traumatize;
