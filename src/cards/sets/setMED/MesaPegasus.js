"use strict";
const Constants = require ("../../../Constants");
const MesaPegasusBase = require("../setCED/MesaPegasus");

class MesaPegasus extends MesaPegasusBase {
  constructor (game) {
    super(game, "Mesa Pegasus", "Masters Edition", "MED");
  }
}

module.exports = MesaPegasus;
