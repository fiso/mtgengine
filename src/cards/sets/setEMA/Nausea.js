"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nausea extends UnimplementedCard {
  constructor (game) {
    super(game, "Nausea", "Eternal Masters", "EMA");
  }
}

module.exports = Nausea;
