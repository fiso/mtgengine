"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlurSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Blur Sliver", "Magic 2014", "M14");
  }
}

module.exports = BlurSliver;
