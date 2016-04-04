"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathmarkBase = require("../setCSP/Deathmark.js");

class Deathmark extends DeathmarkBase {
  constructor(game) {
    super(game, "Deathmark", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Deathmark;
