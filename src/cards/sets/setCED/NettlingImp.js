"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettlingImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Nettling Imp", "Collector's Edition", "CED");
  }
}

module.exports = NettlingImp;
