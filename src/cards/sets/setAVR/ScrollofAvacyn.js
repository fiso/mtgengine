"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrollofAvacyn extends UnimplementedCard {
  constructor(game) {
    super(game, "Scroll of Avacyn", "Avacyn Restored", "AVR");
  }
}

module.exports = ScrollofAvacyn;
