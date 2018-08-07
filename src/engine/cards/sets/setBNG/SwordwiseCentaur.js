"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordwiseCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Swordwise Centaur", "Born of the Gods", "BNG");
  }
}

module.exports = SwordwiseCentaur;
