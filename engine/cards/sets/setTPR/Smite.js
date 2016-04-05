"use strict";
const Constants = require ("../../../Constants");
const SmiteBase = require("../setGTC/Smite");

class Smite extends SmiteBase {
  constructor(game) {
    super(game, "Smite", "Tempest Remastered", "TPR");
  }
}

module.exports = Smite;
