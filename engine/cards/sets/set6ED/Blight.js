"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blight extends Card {
  constructor(game) {
    super(game, "Blight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blight;
