"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disintegrate extends Card {
  constructor(game) {
    super(game, "Disintegrate", "Collector's Edition", "CED");
  }
}

module.exports = Disintegrate;
