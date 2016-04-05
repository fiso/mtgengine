"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BansheesBlade extends UnimplementedCard {
  constructor(game) {
    super(game, "Banshee's Blade", "Mirrodin", "MRD");
  }
}

module.exports = BansheesBlade;
