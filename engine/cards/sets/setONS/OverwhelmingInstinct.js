"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OverwhelmingInstinct extends Card {
  constructor(game) {
    super(game, "Overwhelming Instinct", "Onslaught", "ONS");
  }
}

module.exports = OverwhelmingInstinct;
