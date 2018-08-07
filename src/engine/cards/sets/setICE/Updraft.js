"use strict";
const Constants = require ("../../../Constants");
const UpdraftBase = require("../set5ED/Updraft");

class Updraft extends UpdraftBase {
  constructor (game) {
    super(game, "Updraft", "Ice Age", "ICE");
  }
}

module.exports = Updraft;
