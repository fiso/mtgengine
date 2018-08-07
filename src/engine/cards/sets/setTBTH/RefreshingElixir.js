"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RefreshingElixir extends UnimplementedCard {
  constructor (game) {
    super(game, "Refreshing Elixir", "Battle the Horde", "TBTH");
  }
}

module.exports = RefreshingElixir;
