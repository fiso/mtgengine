"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Cursed Land", "Fifth Edition", "5ED");
  }
}

module.exports = CursedLand;
