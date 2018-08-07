"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Image", "Modern Masters 2017", "MM3");
  }
}

module.exports = PhantasmalImage;
