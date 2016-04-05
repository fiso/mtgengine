"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsionicEntity extends UnimplementedCard {
  constructor(game) {
    super(game, "Psionic Entity", "Fourth Edition", "4ED");
  }
}

module.exports = PsionicEntity;
