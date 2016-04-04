"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inquisition extends Card {
  constructor(game) {
    super(game, "Inquisition", "The Dark", "DRK");
  }
}

module.exports = Inquisition;
