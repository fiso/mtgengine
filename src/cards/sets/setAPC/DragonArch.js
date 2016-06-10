"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonArch extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Arch", "Apocalypse", "APC");
  }
}

module.exports = DragonArch;
