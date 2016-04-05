"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archweaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Archweaver", "Return to Ravnica", "RTR");
  }
}

module.exports = Archweaver;
