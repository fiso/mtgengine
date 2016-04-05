"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkFavor extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Favor", "Magic 2012", "M12");
  }
}

module.exports = DarkFavor;
