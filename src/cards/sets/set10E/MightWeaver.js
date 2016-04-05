"use strict";
const Constants = require ("../../../Constants");
const MightWeaverBase = require("../setINV/MightWeaver");

class MightWeaver extends MightWeaverBase {
  constructor(game) {
    super(game, "Might Weaver", "Tenth Edition", "10E");
  }
}

module.exports = MightWeaver;
