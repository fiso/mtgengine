"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Karma extends Card {
  constructor(game) {
    super(game, "Karma", "Collector's Edition", "CED");
  }
}

module.exports = Karma;
