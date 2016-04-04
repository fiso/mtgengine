"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherizeBase = require("../setC15/Ætherize.js");

class Ætherize extends ÆtherizeBase {
  constructor(game) {
    super(game, "Ætherize", "Gatecrash", "GTC");
  }
}

module.exports = Ætherize;
