"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Execute extends UnimplementedCard {
  constructor (game) {
    super(game, "Execute", "Eighth Edition", "8ED");
  }
}

module.exports = Execute;
