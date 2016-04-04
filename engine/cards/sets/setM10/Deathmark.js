"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathmarkBase = require("../setCSP/Deathmark.js");

class Deathmark extends DeathmarkBase {
  constructor(game) {
    super(game, "Deathmark", "Magic 2010", "M10");
  }
}

module.exports = Deathmark;
