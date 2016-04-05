"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtisansSorrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Artisan's Sorrow", "Theros", "THS");
  }
}

module.exports = ArtisansSorrow;
