"use strict";
const Constants = require ("../../../Constants");
const HateWeaverBase = require("../setINV/HateWeaver");

class HateWeaver extends HateWeaverBase {
  constructor(game) {
    super(game, "Hate Weaver", "Tenth Edition", "10E");
  }
}

module.exports = HateWeaver;
