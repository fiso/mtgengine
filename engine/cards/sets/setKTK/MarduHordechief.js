"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduHordechief extends Card {
  constructor(game) {
    super(game, "Mardu Hordechief", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHordechief;
