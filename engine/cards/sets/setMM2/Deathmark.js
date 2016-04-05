"use strict";
const Constants = require ("../../../Constants");
const DeathmarkBase = require("../setCSP/Deathmark");

class Deathmark extends DeathmarkBase {
  constructor(game) {
    super(game, "Deathmark", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Deathmark;
