"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuturedGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Sutured Ghoul", "Magic 2012", "M12");
  }
}

module.exports = SuturedGhoul;
