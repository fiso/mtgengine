"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilasRennSeekerAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Silas Renn, Seeker Adept", "You Make the Cube", "PZ2");
  }
}

module.exports = SilasRennSeekerAdept;
