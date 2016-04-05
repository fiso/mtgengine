"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelRelic extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Relic", "New Phyrexia", "NPH");
  }
}

module.exports = DarksteelRelic;
