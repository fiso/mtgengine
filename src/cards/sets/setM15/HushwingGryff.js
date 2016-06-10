"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HushwingGryff extends UnimplementedCard {
  constructor (game) {
    super(game, "Hushwing Gryff", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HushwingGryff;
