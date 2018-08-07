"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistveilPlains extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistveil Plains", "Shadowmoor", "SHM");
  }
}

module.exports = MistveilPlains;
