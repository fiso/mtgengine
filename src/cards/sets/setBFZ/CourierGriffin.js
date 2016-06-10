"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourierGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Courier Griffin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CourierGriffin;
