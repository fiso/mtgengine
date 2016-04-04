"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeoninAbunasBase = require("../setARC/LeoninAbunas.js");

class LeoninAbunas extends LeoninAbunasBase {
  constructor(game) {
    super(game, "Leonin Abunas", "Mirrodin", "MRD");
  }
}

module.exports = LeoninAbunas;
