"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TocatliHonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Tocatli Honor Guard", "Ixalan", "XLN");
  }
}

module.exports = TocatliHonorGuard;
