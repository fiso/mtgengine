"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soldiertokencard extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldier token card", "Unglued", "UGL");
  }
}

module.exports = Soldiertokencard;
