"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalImage extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantasmal Image", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalImage;
