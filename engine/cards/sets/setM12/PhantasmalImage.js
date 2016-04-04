"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalImage extends Card {
  constructor(game) {
    super(game, "Phantasmal Image", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalImage;
