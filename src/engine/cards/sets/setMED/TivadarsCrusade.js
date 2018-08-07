"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TivadarsCrusade extends UnimplementedCard {
  constructor (game) {
    super(game, "Tivadar's Crusade", "Masters Edition", "MED");
  }
}

module.exports = TivadarsCrusade;
