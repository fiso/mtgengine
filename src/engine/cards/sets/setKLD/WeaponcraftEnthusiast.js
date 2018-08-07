"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeaponcraftEnthusiast extends UnimplementedCard {
  constructor (game) {
    super(game, "Weaponcraft Enthusiast", "Kaladesh", "KLD");
  }
}

module.exports = WeaponcraftEnthusiast;
