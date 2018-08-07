"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsolatedWatchtower extends UnimplementedCard {
  constructor (game) {
    super(game, "Isolated Watchtower", "Commander 2018", "C18");
  }
}

module.exports = IsolatedWatchtower;
