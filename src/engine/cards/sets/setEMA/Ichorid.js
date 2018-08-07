"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ichorid extends UnimplementedCard {
  constructor (game) {
    super(game, "Ichorid", "Eternal Masters", "EMA");
  }
}

module.exports = Ichorid;
