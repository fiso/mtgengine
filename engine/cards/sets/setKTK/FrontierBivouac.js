"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontierBivouac extends UnimplementedCard {
  constructor(game) {
    super(game, "Frontier Bivouac", "Khans of Tarkir", "KTK");
  }
}

module.exports = FrontierBivouac;
