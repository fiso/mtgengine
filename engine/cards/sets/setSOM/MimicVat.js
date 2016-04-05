"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MimicVat extends UnimplementedCard {
  constructor(game) {
    super(game, "Mimic Vat", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MimicVat;
