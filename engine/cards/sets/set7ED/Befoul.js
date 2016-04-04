"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BefoulBase = require("../setCHK/Befoul.js");

class Befoul extends BefoulBase {
  constructor(game) {
    super(game, "Befoul", "Seventh Edition", "7ED");
  }
}

module.exports = Befoul;
