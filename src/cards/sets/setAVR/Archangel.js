"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archangel extends UnimplementedCard {
  constructor (game) {
    super(game, "Archangel", "Avacyn Restored", "AVR");
  }
}

module.exports = Archangel;
