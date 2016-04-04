"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightWeaverBase = require("../setINV/MightWeaver.js");

class MightWeaver extends MightWeaverBase {
  constructor(game) {
    super(game, "Might Weaver", "Tenth Edition", "10E");
  }
}

module.exports = MightWeaver;
