"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Equipoise extends UnimplementedCard {
  constructor (game) {
    super(game, "Equipoise", "Visions", "VIS");
  }
}

module.exports = Equipoise;
