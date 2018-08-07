"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreemptiveStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Preemptive Strike", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PreemptiveStrike;
