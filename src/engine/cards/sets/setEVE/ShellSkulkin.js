"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShellSkulkin extends UnimplementedCard {
  constructor (game) {
    super(game, "Shell Skulkin", "Eventide", "EVE");
  }
}

module.exports = ShellSkulkin;
