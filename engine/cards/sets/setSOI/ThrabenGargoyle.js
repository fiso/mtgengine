"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Thraben Gargoyle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThrabenGargoyle;
