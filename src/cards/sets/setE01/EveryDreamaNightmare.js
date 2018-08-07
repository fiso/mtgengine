"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EveryDreamaNightmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Every Dream a Nightmare", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = EveryDreamaNightmare;
