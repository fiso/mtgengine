"use strict";
const Constants = require ("../../../Constants");
const LabRatsBase = require("../setTPR/LabRats");

class LabRats extends LabRatsBase {
  constructor (game) {
    super(game, "Lab Rats", "Stronghold", "STH");
  }
}

module.exports = LabRats;
