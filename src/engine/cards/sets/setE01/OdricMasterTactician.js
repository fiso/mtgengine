"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OdricMasterTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Odric, Master Tactician", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = OdricMasterTactician;
