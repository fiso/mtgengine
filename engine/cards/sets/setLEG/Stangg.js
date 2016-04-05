"use strict";
const Constants = require ("../../../Constants");
const StanggBase = require("../setCHR/Stangg");

class Stangg extends StanggBase {
  constructor(game) {
    super(game, "Stangg", "Legends", "LEG");
  }
}

module.exports = Stangg;
