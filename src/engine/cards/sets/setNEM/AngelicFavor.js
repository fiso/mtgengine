"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Favor", "Nemesis", "NEM");
  }
}

module.exports = AngelicFavor;
