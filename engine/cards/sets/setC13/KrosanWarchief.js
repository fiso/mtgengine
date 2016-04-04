"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanWarchief extends Card {
  constructor(game) {
    super(game, "Krosan Warchief", "Commander 2013 Edition", "C13");
  }
}

module.exports = KrosanWarchief;
