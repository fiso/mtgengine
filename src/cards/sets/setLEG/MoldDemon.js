"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoldDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mold Demon", "Legends", "LEG");
  }
}

module.exports = MoldDemon;
