"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regress extends UnimplementedCard {
  constructor (game) {
    super(game, "Regress", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Regress;
