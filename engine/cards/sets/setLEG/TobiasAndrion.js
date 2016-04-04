"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TobiasAndrionBase = require("../setCHR/TobiasAndrion.js");

class TobiasAndrion extends TobiasAndrionBase {
  constructor(game) {
    super(game, "Tobias Andrion", "Legends", "LEG");
  }
}

module.exports = TobiasAndrion;
