"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecratorHag extends UnimplementedCard {
  constructor (game) {
    super(game, "Desecrator Hag", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DesecratorHag;
