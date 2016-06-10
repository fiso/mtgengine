"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulscour extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulscour", "Darksteel", "DST");
  }
}

module.exports = Soulscour;
