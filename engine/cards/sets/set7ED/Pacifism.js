"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PacifismBase = require("../setATH/Pacifism.js");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Seventh Edition", "7ED");
  }
}

module.exports = Pacifism;
