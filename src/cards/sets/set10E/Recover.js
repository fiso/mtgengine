"use strict";
const Constants = require ("../../../Constants");
const RecoverBase = require("../setINV/Recover");

class Recover extends RecoverBase {
  constructor(game) {
    super(game, "Recover", "Tenth Edition", "10E");
  }
}

module.exports = Recover;
