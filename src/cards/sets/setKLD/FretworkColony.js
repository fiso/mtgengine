"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FretworkColony extends UnimplementedCard {
  constructor (game) {
    super(game, "Fretwork Colony", "Kaladesh", "KLD");
  }
}

module.exports = FretworkColony;
