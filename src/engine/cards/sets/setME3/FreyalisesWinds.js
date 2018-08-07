"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreyalisesWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Freyalise's Winds", "Masters Edition III", "ME3");
  }
}

module.exports = FreyalisesWinds;
