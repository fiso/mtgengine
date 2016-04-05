"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaraudingMaulhorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Marauding Maulhorn", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MaraudingMaulhorn;
