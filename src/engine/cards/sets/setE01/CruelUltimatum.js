"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelUltimatum extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Ultimatum", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = CruelUltimatum;
