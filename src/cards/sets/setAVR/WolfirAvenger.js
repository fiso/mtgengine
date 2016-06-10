"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfirAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolfir Avenger", "Avacyn Restored", "AVR");
  }
}

module.exports = WolfirAvenger;
