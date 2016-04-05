"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreyalisesWinds extends UnimplementedCard {
  constructor(game) {
    super(game, "Freyalise's Winds", "Ice Age", "ICE");
  }
}

module.exports = FreyalisesWinds;
