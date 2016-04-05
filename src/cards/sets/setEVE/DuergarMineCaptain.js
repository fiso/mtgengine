"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuergarMineCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Duergar Mine-Captain", "Eventide", "EVE");
  }
}

module.exports = DuergarMineCaptain;
