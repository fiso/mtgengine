"use strict";
const Constants = require ("../../../Constants");
const IntettheDreamerBase = require("../setCMD/IntettheDreamer");

class IntettheDreamer extends IntettheDreamerBase {
  constructor (game) {
    super(game, "Intet, the Dreamer", "Planar Chaos", "PLC");
  }
}

module.exports = IntettheDreamer;
