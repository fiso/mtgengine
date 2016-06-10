"use strict";
const Constants = require ("../../../Constants");
const SmiteBase = require("../setGTC/Smite");

class Smite extends SmiteBase {
  constructor (game) {
    super(game, "Smite", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Smite;
