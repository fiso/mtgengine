"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrismaticWardBase = require("../set5ED/PrismaticWard.js");

class PrismaticWard extends PrismaticWardBase {
  constructor(game) {
    super(game, "Prismatic Ward", "Ice Age", "ICE");
  }
}

module.exports = PrismaticWard;
