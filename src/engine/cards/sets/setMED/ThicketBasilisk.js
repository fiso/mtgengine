"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThicketBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Thicket Basilisk", "Masters Edition", "MED");
  }
}

module.exports = ThicketBasilisk;
