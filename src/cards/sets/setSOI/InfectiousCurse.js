"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfectiousCurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Infectious Curse", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InfectiousCurse;
