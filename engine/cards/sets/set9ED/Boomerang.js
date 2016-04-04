"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoomerangBase = require("../setCHR/Boomerang.js");

class Boomerang extends BoomerangBase {
  constructor(game) {
    super(game, "Boomerang", "Ninth Edition", "9ED");
  }
}

module.exports = Boomerang;
