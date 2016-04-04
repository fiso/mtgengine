"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombifyBase = require("../setARC/Zombify.js");

class Zombify extends ZombifyBase {
  constructor(game) {
    super(game, "Zombify", "Ninth Edition", "9ED");
  }
}

module.exports = Zombify;
