"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianAcademy extends UnimplementedCard {
  constructor (game) {
    super(game, "Tolarian Academy", "Vintage Masters", "VMA");
  }
}

module.exports = TolarianAcademy;
