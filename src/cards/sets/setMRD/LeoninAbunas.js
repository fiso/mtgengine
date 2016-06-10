"use strict";
const Constants = require ("../../../Constants");
const LeoninAbunasBase = require("../setARC/LeoninAbunas");

class LeoninAbunas extends LeoninAbunasBase {
  constructor (game) {
    super(game, "Leonin Abunas", "Mirrodin", "MRD");
  }
}

module.exports = LeoninAbunas;
