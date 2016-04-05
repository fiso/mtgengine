"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofImmortality extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of Immortality", "Theros", "THS");
  }
}

module.exports = GiftofImmortality;
