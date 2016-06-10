"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuriedAlive extends UnimplementedCard {
  constructor (game) {
    super(game, "Buried Alive", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BuriedAlive;
