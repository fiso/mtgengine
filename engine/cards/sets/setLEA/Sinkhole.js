"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SinkholeBase = require("../setCED/Sinkhole.js");

class Sinkhole extends SinkholeBase {
  constructor(game) {
    super(game, "Sinkhole", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Sinkhole;
