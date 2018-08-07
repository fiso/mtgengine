"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhabalGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Khabál Ghoul", "Masters Edition", "MED");
  }
}

module.exports = KhabalGhoul;
