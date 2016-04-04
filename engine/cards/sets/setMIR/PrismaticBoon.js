"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticBoon extends Card {
  constructor(game) {
    super(game, "Prismatic Boon", "Mirage", "MIR");
  }
}

module.exports = PrismaticBoon;
