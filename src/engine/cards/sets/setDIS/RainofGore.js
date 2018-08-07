"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofGore extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Gore", "Dissension", "DIS");
  }
}

module.exports = RainofGore;
