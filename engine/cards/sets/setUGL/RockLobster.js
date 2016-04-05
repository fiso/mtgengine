"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockLobster extends UnimplementedCard {
  constructor(game) {
    super(game, "Rock Lobster", "Unglued", "UGL");
  }
}

module.exports = RockLobster;
