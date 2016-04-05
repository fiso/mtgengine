"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandofUnsummoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Command of Unsummoning", "Portal", "POR");
  }
}

module.exports = CommandofUnsummoning;
