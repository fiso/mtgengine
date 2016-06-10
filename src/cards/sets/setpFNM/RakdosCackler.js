"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosCackler extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Cackler", "Friday Night Magic", "pFNM");
  }
}

module.exports = RakdosCackler;
