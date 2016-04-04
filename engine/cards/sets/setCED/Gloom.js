"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gloom extends Card {
  constructor(game) {
    super(game, "Gloom", "Collector's Edition", "CED");
  }
}

module.exports = Gloom;
