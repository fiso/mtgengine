"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseoftheSwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Curse of the Swine", "Theros", "THS");
  }
}

module.exports = CurseoftheSwine;
