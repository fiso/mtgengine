"use strict";
const Constants = require ("../../../Constants");
const NestInvaderBase = require("../setPCA/NestInvader");

class NestInvader extends NestInvaderBase {
  constructor (game) {
    super(game, "Nest Invader", "Planechase 2012", "PC2");
  }
}

module.exports = NestInvader;
