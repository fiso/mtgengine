"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Knight", "Masters Edition IV", "ME4");
  }
}

module.exports = BlackKnight;
