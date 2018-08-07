"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrakensEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Kraken's Eye", "Magic 2012", "M12");
  }
}

module.exports = KrakensEye;
