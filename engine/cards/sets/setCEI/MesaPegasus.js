"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesaPegasusBase = require("../setCED/MesaPegasus.js");

class MesaPegasus extends MesaPegasusBase {
  constructor(game) {
    super(game, "Mesa Pegasus", "International Collector's Edition", "CEI");
  }
}

module.exports = MesaPegasus;
