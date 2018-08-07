"use strict";
const Constants = require ("../../../Constants");
const MasticoreBase = require("../setVMA/Masticore");

class Masticore extends MasticoreBase {
  constructor (game) {
    super(game, "Masticore", "Urza's Destiny", "UDS");
  }
}

module.exports = Masticore;
