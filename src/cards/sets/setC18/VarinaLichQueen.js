"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VarinaLichQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Varina, Lich Queen", "Commander 2018", "C18");
  }
}

module.exports = VarinaLichQueen;
