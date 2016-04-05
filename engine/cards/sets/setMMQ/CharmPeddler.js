"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharmPeddler extends UnimplementedCard {
  constructor(game) {
    super(game, "Charm Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = CharmPeddler;
