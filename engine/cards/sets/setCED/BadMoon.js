"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BadMoon extends Card {
  constructor(game) {
    super(game, "Bad Moon", "Collector's Edition", "CED");
  }
}

module.exports = BadMoon;
