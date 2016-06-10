"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Goblintokencard extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin token card", "Unglued", "UGL");
  }
}

module.exports = Goblintokencard;
