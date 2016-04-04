"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesaPegasusBase = require("../setCED/MesaPegasus.js");

class MesaPegasus extends MesaPegasusBase {
  constructor(game) {
    super(game, "Mesa Pegasus", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MesaPegasus;
