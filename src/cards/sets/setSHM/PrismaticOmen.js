"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticOmen extends UnimplementedCard {
  constructor (game) {
    super(game, "Prismatic Omen", "Shadowmoor", "SHM");
  }
}

module.exports = PrismaticOmen;
