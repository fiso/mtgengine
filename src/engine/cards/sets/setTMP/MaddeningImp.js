"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaddeningImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Maddening Imp", "Tempest", "TMP");
  }
}

module.exports = MaddeningImp;
