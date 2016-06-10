"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofThreeWishes extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Three Wishes", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RingofThreeWishes;
