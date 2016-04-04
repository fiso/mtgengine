"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticOmen extends Card {
  constructor(game) {
    super(game, "Prismatic Omen", "Shadowmoor", "SHM");
  }
}

module.exports = PrismaticOmen;
