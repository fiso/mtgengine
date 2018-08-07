"use strict";
const Constants = require ("../../../Constants");
const NestInvaderBase = require("../setPCA/NestInvader");

class NestInvader extends NestInvaderBase {
  constructor (game) {
    super(game, "Nest Invader", "Modern Masters 2015", "MM2");
  }
}

module.exports = NestInvader;
