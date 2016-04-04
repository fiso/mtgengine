"use strict";
const Constants = require ("../../../Constants");
const NestInvaderBase = require("../setMM2/NestInvader");

class NestInvader extends NestInvaderBase {
  constructor(game) {
    super(game, "Nest Invader", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NestInvader;
