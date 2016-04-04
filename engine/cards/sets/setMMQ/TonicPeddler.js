"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TonicPeddler extends UnimplementedCard {
  constructor(game) {
    super(game, "Tonic Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = TonicPeddler;
