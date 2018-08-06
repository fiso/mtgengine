"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiveNoGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Give No Ground", "Eldritch Moon", "EMN");
  }
}

module.exports = GiveNoGround;
