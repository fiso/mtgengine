"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentArtisan extends UnimplementedCard {
  constructor(game) {
    super(game, "Silent Artisan", "Theros", "THS");
  }
}

module.exports = SilentArtisan;
