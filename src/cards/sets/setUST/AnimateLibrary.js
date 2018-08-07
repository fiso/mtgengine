"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateLibrary extends UnimplementedCard {
  constructor (game) {
    super(game, "Animate Library", "Unstable", "UST");
  }
}

module.exports = AnimateLibrary;
