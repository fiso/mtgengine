"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaywardGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayward Giant", "Kaladesh", "KLD");
  }
}

module.exports = WaywardGiant;
