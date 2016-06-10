"use strict";
const Constants = require ("../../../Constants");
const PyrokinesisBase = require("../setALL/Pyrokinesis");

class Pyrokinesis extends PyrokinesisBase {
  constructor (game) {
    super(game, "Pyrokinesis", "Masters Edition II", "ME2");
  }
}

module.exports = Pyrokinesis;
