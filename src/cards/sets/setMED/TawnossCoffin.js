"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TawnossCoffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos's Coffin", "Masters Edition", "MED");
  }
}

module.exports = TawnossCoffin;
