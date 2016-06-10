"use strict";
const Constants = require ("../../../Constants");
const LeviathanBase = require("../setBTD/Leviathan");

class Leviathan extends LeviathanBase {
  constructor (game) {
    super(game, "Leviathan", "Fifth Edition", "5ED");
  }
}

module.exports = Leviathan;
