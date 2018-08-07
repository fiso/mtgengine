"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PegasusRefuge extends UnimplementedCard {
  constructor (game) {
    super(game, "Pegasus Refuge", "Tempest", "TMP");
  }
}

module.exports = PegasusRefuge;
