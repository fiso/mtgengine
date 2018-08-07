"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceMemoryAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Memory Adept", "Magic 2014", "M14");
  }
}

module.exports = JaceMemoryAdept;
