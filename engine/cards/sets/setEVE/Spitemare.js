"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpitemareBase = require("../setDDH/Spitemare.js");

class Spitemare extends SpitemareBase {
  constructor(game) {
    super(game, "Spitemare", "Eventide", "EVE");
  }
}

module.exports = Spitemare;
