"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombifyBase = require("../setARC/Zombify.js");

class Zombify extends ZombifyBase {
  constructor(game) {
    super(game, "Zombify", "Eighth Edition", "8ED");
  }
}

module.exports = Zombify;
