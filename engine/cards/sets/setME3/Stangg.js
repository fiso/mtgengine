"use strict";
const Constants = require ("../../../Constants");
const StanggBase = require("../setCHR/Stangg");

class Stangg extends StanggBase {
  constructor(game) {
    super(game, "Stangg", "Masters Edition III", "ME3");
  }
}

module.exports = Stangg;
