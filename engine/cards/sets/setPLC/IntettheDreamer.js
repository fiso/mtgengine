"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntettheDreamerBase = require("../setCMD/IntettheDreamer.js");

class IntettheDreamer extends IntettheDreamerBase {
  constructor(game) {
    super(game, "Intet, the Dreamer", "Planar Chaos", "PLC");
  }
}

module.exports = IntettheDreamer;
