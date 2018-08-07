"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggravatedAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggravated Assault", "Explorers of Ixalan", "E02");
  }
}

module.exports = AggravatedAssault;
