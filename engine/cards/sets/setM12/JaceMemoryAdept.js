"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JaceMemoryAdept extends Card {
  constructor(game) {
    super(game, "Jace, Memory Adept", "Magic 2012", "M12");
  }
}

module.exports = JaceMemoryAdept;
