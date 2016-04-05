"use strict";
const Constants = require ("../../../Constants");
const ManamorphoseBase = require("../setMMA/Manamorphose");

class Manamorphose extends ManamorphoseBase {
  constructor(game) {
    super(game, "Manamorphose", "Shadowmoor", "SHM");
  }
}

module.exports = Manamorphose;
