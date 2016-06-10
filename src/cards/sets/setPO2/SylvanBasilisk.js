"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Basilisk", "Portal Second Age", "PO2");
  }
}

module.exports = SylvanBasilisk;
