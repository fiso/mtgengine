"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodhallPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodhall Priest", "Eldritch Moon", "EMN");
  }
}

module.exports = BloodhallPriest;
