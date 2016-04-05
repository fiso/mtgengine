"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Otaria extends UnimplementedCard {
  constructor(game) {
    super(game, "Otaria", "Planechase", "HOP");
  }
}

module.exports = Otaria;
