"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PreemptiveStrike extends Card {
  constructor(game) {
    super(game, "Preemptive Strike", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PreemptiveStrike;
