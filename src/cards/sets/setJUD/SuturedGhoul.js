"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuturedGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Sutured Ghoul", "Judgment", "JUD");
  }
}

module.exports = SuturedGhoul;
