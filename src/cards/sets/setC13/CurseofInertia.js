"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofInertia extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Inertia", "Commander 2013 Edition", "C13");
  }
}

module.exports = CurseofInertia;
