"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PetrifiedField extends Card {
  constructor(game) {
    super(game, "Petrified Field", "Odyssey", "ODY");
  }
}

module.exports = PetrifiedField;
