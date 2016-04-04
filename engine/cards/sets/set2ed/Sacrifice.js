"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacrificeBase = require("../setCED/Sacrifice.js");

class Sacrifice extends SacrificeBase {
  constructor(game) {
    super(game, "Sacrifice", "Unlimited Edition", "2ED");
  }
}

module.exports = Sacrifice;
