"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreedfromtheReal extends UnimplementedCard {
  constructor(game) {
    super(game, "Freed from the Real", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FreedfromtheReal;
