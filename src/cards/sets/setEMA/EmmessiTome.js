"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmmessiTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Emmessi Tome", "Eternal Masters", "EMA");
  }
}

module.exports = EmmessiTome;
