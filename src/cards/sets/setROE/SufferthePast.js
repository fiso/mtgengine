"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SufferthePast extends UnimplementedCard {
  constructor (game) {
    super(game, "Suffer the Past", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SufferthePast;
