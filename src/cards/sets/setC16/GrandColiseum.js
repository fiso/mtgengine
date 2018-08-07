"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandColiseum extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Coliseum", "Commander 2016", "C16");
  }
}

module.exports = GrandColiseum;
