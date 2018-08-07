"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrollAscetic extends UnimplementedCard {
  constructor (game) {
    super(game, "Troll Ascetic", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = TrollAscetic;
