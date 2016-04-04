"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necropolis extends Card {
  constructor(game) {
    super(game, "Necropolis", "The Dark", "DRK");
  }
}

module.exports = Necropolis;
