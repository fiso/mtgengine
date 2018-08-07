"use strict";
const Constants = require ("../../../Constants");
const RecoverBase = require("../setRIX/Recover");

class Recover extends RecoverBase {
  constructor (game) {
    super(game, "Recover", "Modern Masters 2017", "MM3");
  }
}

module.exports = Recover;
