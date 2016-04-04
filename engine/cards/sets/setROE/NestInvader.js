"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NestInvaderBase = require("../setMM2/NestInvader.js");

class NestInvader extends NestInvaderBase {
  constructor(game) {
    super(game, "Nest Invader", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NestInvader;
