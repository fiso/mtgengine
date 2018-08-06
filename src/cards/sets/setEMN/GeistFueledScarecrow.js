"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeistFueledScarecrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Geist-Fueled Scarecrow", "Eldritch Moon", "EMN");
  }
}

module.exports = GeistFueledScarecrow;
