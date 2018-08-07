"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrsBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr's Bond", "Commander 2011", "CMD");
  }
}

module.exports = MartyrsBond;
