"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terrarion extends UnimplementedCard {
  constructor (game) {
    super(game, "Terrarion", "Eldritch Moon", "EMN");
  }
}

module.exports = Terrarion;
