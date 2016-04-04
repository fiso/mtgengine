"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimordialSageBase = require("../setC14/PrimordialSage.js");

class PrimordialSage extends PrimordialSageBase {
  constructor(game) {
    super(game, "Primordial Sage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PrimordialSage;
