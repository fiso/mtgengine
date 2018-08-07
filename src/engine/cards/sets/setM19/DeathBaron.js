"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathBaron extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Baron", "Core Set 2019", "M19");
  }
}

module.exports = DeathBaron;
