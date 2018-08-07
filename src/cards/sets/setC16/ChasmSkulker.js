"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChasmSkulker extends UnimplementedCard {
  constructor (game) {
    super(game, "Chasm Skulker", "Commander 2016", "C16");
  }
}

module.exports = ChasmSkulker;
