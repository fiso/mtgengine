"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnageTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnage Tyrant", "Ixalan", "XLN");
  }
}

module.exports = CarnageTyrant;
