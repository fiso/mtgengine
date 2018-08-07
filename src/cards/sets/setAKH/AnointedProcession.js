"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnointedProcession extends UnimplementedCard {
  constructor (game) {
    super(game, "Anointed Procession", "Amonkhet", "AKH");
  }
}

module.exports = AnointedProcession;
