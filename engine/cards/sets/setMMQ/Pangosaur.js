"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pangosaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Pangosaur", "Mercadian Masques", "MMQ");
  }
}

module.exports = Pangosaur;
