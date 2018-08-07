"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recollect extends UnimplementedCard {
  constructor (game) {
    super(game, "Recollect", "Core Set 2019", "M19");
  }
}

module.exports = Recollect;
