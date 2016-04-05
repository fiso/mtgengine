"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hanna extends UnimplementedCard {
  constructor(game) {
    super(game, "Hanna", "Vanguard", "VAN");
  }
}

module.exports = Hanna;
