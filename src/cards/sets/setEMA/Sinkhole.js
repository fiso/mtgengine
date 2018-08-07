"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sinkhole extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinkhole", "Eternal Masters", "EMA");
  }
}

module.exports = Sinkhole;
