"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Light", "Apocalypse", "APC");
  }
}

module.exports = DivineLight;
