"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChamberedNautilus extends UnimplementedCard {
  constructor (game) {
    super(game, "Chambered Nautilus", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChamberedNautilus;
