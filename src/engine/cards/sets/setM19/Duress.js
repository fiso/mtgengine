"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duress extends UnimplementedCard {
  constructor (game) {
    super(game, "Duress", "Core Set 2019", "M19");
  }
}

module.exports = Duress;
