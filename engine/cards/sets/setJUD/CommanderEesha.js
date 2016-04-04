"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommanderEesha extends UnimplementedCard {
  constructor(game) {
    super(game, "Commander Eesha", "Judgment", "JUD");
  }
}

module.exports = CommanderEesha;
