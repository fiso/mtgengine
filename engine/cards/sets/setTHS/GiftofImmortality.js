"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftofImmortality extends Card {
  constructor(game) {
    super(game, "Gift of Immortality", "Theros", "THS");
  }
}

module.exports = GiftofImmortality;
