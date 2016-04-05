"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReitoLantern extends UnimplementedCard {
  constructor(game) {
    super(game, "Reito Lantern", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReitoLantern;
