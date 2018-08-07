"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SokenzanBruiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Sokenzan Bruiser", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SokenzanBruiser;
