"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Electrify extends UnimplementedCard {
  constructor (game) {
    super(game, "Electrify", "Core Set 2019", "M19");
  }
}

module.exports = Electrify;
