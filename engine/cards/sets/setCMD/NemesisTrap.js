"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NemesisTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Nemesis Trap", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = NemesisTrap;
