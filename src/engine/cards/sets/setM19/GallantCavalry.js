"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GallantCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gallant Cavalry", "Core Set 2019", "M19");
  }
}

module.exports = GallantCavalry;
