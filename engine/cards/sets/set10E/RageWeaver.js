"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RageWeaverBase = require("../setINV/RageWeaver.js");

class RageWeaver extends RageWeaverBase {
  constructor(game) {
    super(game, "Rage Weaver", "Tenth Edition", "10E");
  }
}

module.exports = RageWeaver;
