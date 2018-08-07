"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurrealMemoir extends UnimplementedCard {
  constructor (game) {
    super(game, "Surreal Memoir", "Iconic Masters", "IMA");
  }
}

module.exports = SurrealMemoir;
