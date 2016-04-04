"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurrealMemoir extends Card {
  constructor(game) {
    super(game, "Surreal Memoir", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurrealMemoir;
