"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Ramosian Captain", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianCaptain;
