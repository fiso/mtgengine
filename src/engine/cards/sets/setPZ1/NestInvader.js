"use strict";
const Constants = require ("../../../Constants");
const NestInvaderBase = require("../setPCA/NestInvader");

class NestInvader extends NestInvaderBase {
  constructor (game) {
    super(game, "Nest Invader", "Legendary Cube", "PZ1");
  }
}

module.exports = NestInvader;
