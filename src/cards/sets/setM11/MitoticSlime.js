"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MitoticSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Mitotic Slime", "Magic 2011", "M11");
  }
}

module.exports = MitoticSlime;
