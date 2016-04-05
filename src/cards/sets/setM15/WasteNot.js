"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WasteNot extends UnimplementedCard {
  constructor(game) {
    super(game, "Waste Not", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WasteNot;
