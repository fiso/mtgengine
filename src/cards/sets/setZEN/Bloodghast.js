"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bloodghast extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodghast", "Zendikar", "ZEN");
  }
}

module.exports = Bloodghast;
