"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireblastBase = require("../setDD3_JVC/Fireblast.js");

class Fireblast extends FireblastBase {
  constructor(game) {
    super(game, "Fireblast", "Friday Night Magic", "pFNM");
  }
}

module.exports = Fireblast;
