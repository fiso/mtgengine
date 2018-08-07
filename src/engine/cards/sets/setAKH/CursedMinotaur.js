"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Cursed Minotaur", "Amonkhet", "AKH");
  }
}

module.exports = CursedMinotaur;
