"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavingDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Raving Dead", "Commander 2014", "C14");
  }
}

module.exports = RavingDead;
