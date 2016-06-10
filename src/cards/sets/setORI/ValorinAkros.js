"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValorinAkros extends UnimplementedCard {
  constructor (game) {
    super(game, "Valor in Akros", "Magic Origins", "ORI");
  }
}

module.exports = ValorinAkros;
