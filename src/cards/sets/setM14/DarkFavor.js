"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Favor", "Magic 2014", "M14");
  }
}

module.exports = DarkFavor;
