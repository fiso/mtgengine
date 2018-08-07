"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nekrataal extends UnimplementedCard {
  constructor (game) {
    super(game, "Nekrataal", "Eternal Masters", "EMA");
  }
}

module.exports = Nekrataal;
