"use strict";
const Constants = require ("../../../Constants");
const SpitemareBase = require("../setDDH/Spitemare");

class Spitemare extends SpitemareBase {
  constructor(game) {
    super(game, "Spitemare", "Eventide", "EVE");
  }
}

module.exports = Spitemare;
