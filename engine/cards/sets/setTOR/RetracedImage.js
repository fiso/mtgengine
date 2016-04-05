"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetracedImage extends UnimplementedCard {
  constructor(game) {
    super(game, "Retraced Image", "Torment", "TOR");
  }
}

module.exports = RetracedImage;
