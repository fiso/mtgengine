"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Imp", "Ninth Edition", "9ED");
  }
}

module.exports = BogImp;
