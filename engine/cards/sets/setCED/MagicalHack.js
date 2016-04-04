"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagicalHack extends Card {
  constructor(game) {
    super(game, "Magical Hack", "Collector's Edition", "CED");
  }
}

module.exports = MagicalHack;
