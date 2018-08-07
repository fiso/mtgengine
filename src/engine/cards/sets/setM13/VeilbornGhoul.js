"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeilbornGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Veilborn Ghoul", "Magic 2013", "M13");
  }
}

module.exports = VeilbornGhoul;
