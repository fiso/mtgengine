"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredGalleon extends UnimplementedCard {
  constructor (game) {
    super(game, "Armored Galleon", "Portal Second Age", "PO2");
  }
}

module.exports = ArmoredGalleon;
