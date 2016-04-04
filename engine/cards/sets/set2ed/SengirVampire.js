"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SengirVampireBase = require("../setBRB/SengirVampire.js");

class SengirVampire extends SengirVampireBase {
  constructor(game) {
    super(game, "Sengir Vampire", "Unlimited Edition", "2ED");
  }
}

module.exports = SengirVampire;
