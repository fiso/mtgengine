"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnointedDeacon extends UnimplementedCard {
  constructor (game) {
    super(game, "Anointed Deacon", "Ixalan", "XLN");
  }
}

module.exports = AnointedDeacon;
