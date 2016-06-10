"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Emissary", "Tempest", "TMP");
  }
}

module.exports = SoltariEmissary;
