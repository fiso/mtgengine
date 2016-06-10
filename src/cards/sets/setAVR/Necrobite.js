"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necrobite extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrobite", "Avacyn Restored", "AVR");
  }
}

module.exports = Necrobite;
