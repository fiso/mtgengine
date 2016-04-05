"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wingcrafter extends UnimplementedCard {
  constructor(game) {
    super(game, "Wingcrafter", "Avacyn Restored", "AVR");
  }
}

module.exports = Wingcrafter;
