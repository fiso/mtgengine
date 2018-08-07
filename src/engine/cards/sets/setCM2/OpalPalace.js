"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalPalace extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Palace", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = OpalPalace;
