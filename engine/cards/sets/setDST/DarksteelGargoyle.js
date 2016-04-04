"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Gargoyle", "Darksteel", "DST");
  }
}

module.exports = DarksteelGargoyle;
