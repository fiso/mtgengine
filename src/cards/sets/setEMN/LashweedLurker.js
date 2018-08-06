"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LashweedLurker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lashweed Lurker", "Eldritch Moon", "EMN");
  }
}

module.exports = LashweedLurker;
