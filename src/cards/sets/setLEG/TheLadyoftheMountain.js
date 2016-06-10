"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheLadyoftheMountain extends UnimplementedCard {
  constructor (game) {
    super(game, "The Lady of the Mountain", "Legends", "LEG");
  }
}

module.exports = TheLadyoftheMountain;
