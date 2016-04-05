"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopyCover extends UnimplementedCard {
  constructor(game) {
    super(game, "Canopy Cover", "Worldwake", "WWK");
  }
}

module.exports = CanopyCover;
