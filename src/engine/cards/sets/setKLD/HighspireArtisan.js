"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighspireArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Highspire Artisan", "Kaladesh", "KLD");
  }
}

module.exports = HighspireArtisan;
