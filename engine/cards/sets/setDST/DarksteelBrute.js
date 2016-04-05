"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Brute", "Darksteel", "DST");
  }
}

module.exports = DarksteelBrute;
