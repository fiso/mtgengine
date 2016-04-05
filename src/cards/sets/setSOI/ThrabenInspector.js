"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenInspector extends UnimplementedCard {
  constructor(game) {
    super(game, "Thraben Inspector", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThrabenInspector;
