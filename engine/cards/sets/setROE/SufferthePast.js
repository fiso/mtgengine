"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SufferthePast extends Card {
  constructor(game) {
    super(game, "Suffer the Past", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SufferthePast;
