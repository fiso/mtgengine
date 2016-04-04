"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForceAway extends Card {
  constructor(game) {
    super(game, "Force Away", "Khans of Tarkir", "KTK");
  }
}

module.exports = ForceAway;
