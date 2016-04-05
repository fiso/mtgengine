"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusoryDemon extends UnimplementedCard {
  constructor(game) {
    super(game, "Illusory Demon", "Alara Reborn", "ARB");
  }
}

module.exports = IllusoryDemon;
