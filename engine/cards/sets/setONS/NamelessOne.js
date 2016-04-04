"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NamelessOne extends Card {
  constructor(game) {
    super(game, "Nameless One", "Onslaught", "ONS");
  }
}

module.exports = NamelessOne;
