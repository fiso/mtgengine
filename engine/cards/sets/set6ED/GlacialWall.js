"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialWall extends Card {
  constructor(game) {
    super(game, "Glacial Wall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GlacialWall;
