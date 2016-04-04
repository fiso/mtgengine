"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TobiasAndrionBase = require("../setCHR/TobiasAndrion.js");

class TobiasAndrion extends TobiasAndrionBase {
  constructor(game) {
    super(game, "Tobias Andrion", "Masters Edition III", "ME3");
  }
}

module.exports = TobiasAndrion;
