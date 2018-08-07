"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntimberBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Turntimber Basilisk", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = TurntimberBasilisk;
