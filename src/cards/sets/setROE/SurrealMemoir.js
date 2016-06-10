"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurrealMemoir extends UnimplementedCard {
  constructor (game) {
    super(game, "Surreal Memoir", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurrealMemoir;
