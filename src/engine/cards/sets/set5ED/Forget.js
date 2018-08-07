"use strict";
const Constants = require ("../../../Constants");
const ForgetBase = require("../set6ED/Forget");

class Forget extends ForgetBase {
  constructor (game) {
    super(game, "Forget", "Fifth Edition", "5ED");
  }
}

module.exports = Forget;
