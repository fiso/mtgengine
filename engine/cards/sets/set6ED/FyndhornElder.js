"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FyndhornElder extends Card {
  constructor(game) {
    super(game, "Fyndhorn Elder", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FyndhornElder;
