"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LayBare extends UnimplementedCard {
  constructor(game) {
    super(game, "Lay Bare", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LayBare;
