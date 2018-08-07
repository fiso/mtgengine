"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Avarax extends UnimplementedCard {
  constructor (game) {
    super(game, "Avarax", "Eternal Masters", "EMA");
  }
}

module.exports = Avarax;
