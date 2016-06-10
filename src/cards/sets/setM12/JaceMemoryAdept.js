"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceMemoryAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Memory Adept", "Magic 2012", "M12");
  }
}

module.exports = JaceMemoryAdept;
