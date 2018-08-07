"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "The Avenger", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheAvenger;
