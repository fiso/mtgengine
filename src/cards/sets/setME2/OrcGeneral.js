"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Orc General", "Masters Edition II", "ME2");
  }
}

module.exports = OrcGeneral;
