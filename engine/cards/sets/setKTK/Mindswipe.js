"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindswipe extends Card {
  constructor(game) {
    super(game, "Mindswipe", "Khans of Tarkir", "KTK");
  }
}

module.exports = Mindswipe;
