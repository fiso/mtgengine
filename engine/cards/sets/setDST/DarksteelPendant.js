"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelPendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Pendant", "Darksteel", "DST");
  }
}

module.exports = DarksteelPendant;
