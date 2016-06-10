"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaintheMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Stain the Mind", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaintheMind;
