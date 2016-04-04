"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfectiousCurse extends Card {
  constructor(game) {
    super(game, "Infectious Curse", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InfectiousCurse;
