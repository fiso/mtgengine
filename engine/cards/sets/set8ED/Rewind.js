"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RewindBase = require("../setpARL/Rewind.js");

class Rewind extends RewindBase {
  constructor(game) {
    super(game, "Rewind", "Eighth Edition", "8ED");
  }
}

module.exports = Rewind;
