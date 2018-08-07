"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fog extends UnimplementedCard {
  constructor (game) {
    super(game, "Fog", "Eternal Masters", "EMA");
  }
}

module.exports = Fog;
