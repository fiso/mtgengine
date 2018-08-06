"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CultistsStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Cultist's Staff", "Eldritch Moon", "EMN");
  }
}

module.exports = CultistsStaff;
