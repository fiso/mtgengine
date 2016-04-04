"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticWard extends Card {
  constructor(game) {
    super(game, "Prismatic Ward", "Fifth Edition", "5ED");
  }
}

module.exports = PrismaticWard;
