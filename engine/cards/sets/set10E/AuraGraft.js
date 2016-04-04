"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuraGraftBase = require("../setODY/AuraGraft.js");

class AuraGraft extends AuraGraftBase {
  constructor(game) {
    super(game, "Aura Graft", "Tenth Edition", "10E");
  }
}

module.exports = AuraGraft;
