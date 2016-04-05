"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombietokencard extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie token card", "Unglued", "UGL");
  }
}

module.exports = Zombietokencard;
