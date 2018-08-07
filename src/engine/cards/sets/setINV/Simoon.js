"use strict";
const Constants = require ("../../../Constants");
const SimoonBase = require("../setWC02/Simoon");

class Simoon extends SimoonBase {
  constructor (game) {
    super(game, "Simoon", "Invasion", "INV");
  }
}

module.exports = Simoon;
