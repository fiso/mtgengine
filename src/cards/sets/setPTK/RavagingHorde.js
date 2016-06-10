"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavagingHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravaging Horde", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RavagingHorde;
