"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenValiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Thraben Valiant", "Avacyn Restored", "AVR");
  }
}

module.exports = ThrabenValiant;
