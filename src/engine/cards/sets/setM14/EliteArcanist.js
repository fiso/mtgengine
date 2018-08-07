"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteArcanist extends UnimplementedCard {
  constructor (game) {
    super(game, "Elite Arcanist", "Magic 2014", "M14");
  }
}

module.exports = EliteArcanist;
