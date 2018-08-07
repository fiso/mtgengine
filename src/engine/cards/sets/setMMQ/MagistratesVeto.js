"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagistratesVeto extends UnimplementedCard {
  constructor (game) {
    super(game, "Magistrate's Veto", "Mercadian Masques", "MMQ");
  }
}

module.exports = MagistratesVeto;
