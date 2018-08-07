"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElkinLair extends UnimplementedCard {
  constructor (game) {
    super(game, "Elkin Lair", "Visions", "VIS");
  }
}

module.exports = ElkinLair;
