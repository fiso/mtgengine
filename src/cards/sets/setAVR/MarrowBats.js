"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarrowBats extends UnimplementedCard {
  constructor (game) {
    super(game, "Marrow Bats", "Avacyn Restored", "AVR");
  }
}

module.exports = MarrowBats;
