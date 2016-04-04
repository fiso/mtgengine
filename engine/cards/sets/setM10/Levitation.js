"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Levitation extends Card {
  constructor(game) {
    super(game, "Levitation", "Magic 2010", "M10");
  }
}

module.exports = Levitation;
