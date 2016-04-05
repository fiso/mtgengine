"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronfistCrusher extends UnimplementedCard {
  constructor(game) {
    super(game, "Ironfist Crusher", "Onslaught", "ONS");
  }
}

module.exports = IronfistCrusher;
