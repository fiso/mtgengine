"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrapplingHook extends UnimplementedCard {
  constructor(game) {
    super(game, "Grappling Hook", "Zendikar", "ZEN");
  }
}

module.exports = GrapplingHook;
