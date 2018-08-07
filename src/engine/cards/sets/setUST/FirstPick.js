"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirstPick extends UnimplementedCard {
  constructor (game) {
    super(game, "First Pick", "Unstable", "UST");
  }
}

module.exports = FirstPick;
