"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashen Ghoul", "Masters Edition II", "ME2");
  }
}

module.exports = AshenGhoul;
