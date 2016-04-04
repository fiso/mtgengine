"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Harrow extends Card {
  constructor(game) {
    super(game, "Harrow", "Commander 2014", "C14");
  }
}

module.exports = Harrow;
