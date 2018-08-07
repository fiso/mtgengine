"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorofthePure extends UnimplementedCard {
  constructor (game) {
    super(game, "Honor of the Pure", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = HonorofthePure;
