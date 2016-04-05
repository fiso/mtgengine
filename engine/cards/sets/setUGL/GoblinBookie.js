"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBookie extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Bookie", "Unglued", "UGL");
  }
}

module.exports = GoblinBookie;
