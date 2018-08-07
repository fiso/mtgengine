"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoviceKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Novice Knight", "Core Set 2019", "M19");
  }
}

module.exports = NoviceKnight;
