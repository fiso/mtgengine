"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreamofLife extends Card {
  constructor(game) {
    super(game, "Stream of Life", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StreamofLife;
