"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyWeaverBase = require("../setINV/SkyWeaver.js");

class SkyWeaver extends SkyWeaverBase {
  constructor(game) {
    super(game, "Sky Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SkyWeaver;
