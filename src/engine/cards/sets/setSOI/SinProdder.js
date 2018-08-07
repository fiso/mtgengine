"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinProdder extends UnimplementedCard {
  constructor (game) {
    super(game, "Sin Prodder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SinProdder;
