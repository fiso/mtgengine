"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disorient extends Card {
  constructor(game) {
    super(game, "Disorient", "Magic 2010", "M10");
  }
}

module.exports = Disorient;
