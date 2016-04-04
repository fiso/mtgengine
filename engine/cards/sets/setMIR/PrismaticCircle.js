"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticCircle extends Card {
  constructor(game) {
    super(game, "Prismatic Circle", "Mirage", "MIR");
  }
}

module.exports = PrismaticCircle;
