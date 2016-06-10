"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruSpiritualist extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Spiritualist", "Scourge", "SCG");
  }
}

module.exports = DaruSpiritualist;
