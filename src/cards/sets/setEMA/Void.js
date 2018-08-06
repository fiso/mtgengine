"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Void extends UnimplementedCard {
  constructor (game) {
    super(game, "Void", "Eternal Masters", "EMA");
  }
}

module.exports = Void;
