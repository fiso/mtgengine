"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicAlchemist extends UnimplementedCard {
  constructor (game) {
    super(game, "Galvanic Alchemist", "Avacyn Restored", "AVR");
  }
}

module.exports = GalvanicAlchemist;
