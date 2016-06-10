"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmuletofVigor extends UnimplementedCard {
  constructor (game) {
    super(game, "Amulet of Vigor", "Worldwake", "WWK");
  }
}

module.exports = AmuletofVigor;
