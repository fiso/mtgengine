"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofThreeWishes extends Card {
  constructor(game) {
    super(game, "Ring of Three Wishes", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RingofThreeWishes;
