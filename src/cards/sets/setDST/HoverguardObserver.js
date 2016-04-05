"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoverguardObserver extends UnimplementedCard {
  constructor(game) {
    super(game, "Hoverguard Observer", "Darksteel", "DST");
  }
}

module.exports = HoverguardObserver;
