"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsionicBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Psionic Blast", "Collector's Edition", "CED");
  }
}

module.exports = PsionicBlast;
