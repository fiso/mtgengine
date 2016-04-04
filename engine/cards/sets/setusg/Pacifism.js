"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PacifismBase = require("../setATH/Pacifism.js");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Urza's Saga", "USG");
  }
}

module.exports = Pacifism;
