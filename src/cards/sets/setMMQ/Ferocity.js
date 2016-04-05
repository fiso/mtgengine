"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ferocity extends UnimplementedCard {
  constructor(game) {
    super(game, "Ferocity", "Mercadian Masques", "MMQ");
  }
}

module.exports = Ferocity;
