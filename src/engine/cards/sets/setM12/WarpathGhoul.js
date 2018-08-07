"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpathGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Warpath Ghoul", "Magic 2012", "M12");
  }
}

module.exports = WarpathGhoul;
