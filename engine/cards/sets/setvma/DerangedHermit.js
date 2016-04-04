"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DerangedHermitBase = require("../setpJGP/DerangedHermit.js");

class DerangedHermit extends DerangedHermitBase {
  constructor(game) {
    super(game, "Deranged Hermit", "Vintage Masters", "VMA");
  }
}

module.exports = DerangedHermit;
