"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gigapede extends Card {
  constructor(game) {
    super(game, "Gigapede", "Onslaught", "ONS");
  }
}

module.exports = Gigapede;
