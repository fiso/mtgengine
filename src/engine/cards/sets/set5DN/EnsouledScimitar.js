"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnsouledScimitar extends UnimplementedCard {
  constructor (game) {
    super(game, "Ensouled Scimitar", "Fifth Dawn", "5DN");
  }
}

module.exports = EnsouledScimitar;
