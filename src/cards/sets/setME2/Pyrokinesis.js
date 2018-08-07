"use strict";
const Constants = require ("../../../Constants");
const PyrokinesisBase = require("../setEMA/Pyrokinesis");

class Pyrokinesis extends PyrokinesisBase {
  constructor (game) {
    super(game, "Pyrokinesis", "Masters Edition II", "ME2");
  }
}

module.exports = Pyrokinesis;
