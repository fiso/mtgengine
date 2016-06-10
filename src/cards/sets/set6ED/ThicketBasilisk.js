"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThicketBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Thicket Basilisk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ThicketBasilisk;
