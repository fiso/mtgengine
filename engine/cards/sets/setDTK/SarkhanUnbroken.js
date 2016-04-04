"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SarkhanUnbroken extends Card {
  constructor(game) {
    super(game, "Sarkhan Unbroken", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SarkhanUnbroken;
