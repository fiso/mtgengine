"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuietContemplation extends Card {
  constructor(game) {
    super(game, "Quiet Contemplation", "Khans of Tarkir", "KTK");
  }
}

module.exports = QuietContemplation;
