"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DackFayden extends UnimplementedCard {
  constructor (game) {
    super(game, "Dack Fayden", "Eternal Masters", "EMA");
  }
}

module.exports = DackFayden;
