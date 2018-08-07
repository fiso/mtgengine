"use strict";
const Constants = require ("../../../Constants");
const RecoverBase = require("../setRIX/Recover");

class Recover extends RecoverBase {
  constructor (game) {
    super(game, "Recover", "Invasion", "INV");
  }
}

module.exports = Recover;
