"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggravatedAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggravated Assault", "Onslaught", "ONS");
  }
}

module.exports = AggravatedAssault;
