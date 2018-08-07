"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjaniValiantProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani, Valiant Protector", "Aether Revolt", "AER");
  }
}

module.exports = AjaniValiantProtector;
