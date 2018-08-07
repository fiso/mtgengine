"use strict";
const Constants = require ("../../../Constants");
const SkirgeFamiliarBase = require("../setVMA/SkirgeFamiliar");

class SkirgeFamiliar extends SkirgeFamiliarBase {
  constructor (game) {
    super(game, "Skirge Familiar", "Urza's Saga", "USG");
  }
}

module.exports = SkirgeFamiliar;
