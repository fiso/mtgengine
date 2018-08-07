"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuriedAlive extends UnimplementedCard {
  constructor (game) {
    super(game, "Buried Alive", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BuriedAlive;
