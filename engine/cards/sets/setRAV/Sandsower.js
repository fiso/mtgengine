"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SandsowerBase = require("../setMMA/Sandsower.js");

class Sandsower extends SandsowerBase {
  constructor(game) {
    super(game, "Sandsower", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Sandsower;
