"use strict";
const Constants = require ("../../../Constants");
const MetalworkerBase = require("../setPRM/Metalworker");

class Metalworker extends MetalworkerBase {
  constructor (game) {
    super(game, "Metalworker", "Urza's Destiny", "UDS");
  }
}

module.exports = Metalworker;
