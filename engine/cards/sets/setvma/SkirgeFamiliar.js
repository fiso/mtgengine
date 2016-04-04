"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirgeFamiliarBase = require("../setUSG/SkirgeFamiliar.js");

class SkirgeFamiliar extends SkirgeFamiliarBase {
  constructor(game) {
    super(game, "Skirge Familiar", "Vintage Masters", "VMA");
  }
}

module.exports = SkirgeFamiliar;
