"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgetBase = require("../set6ED/Forget.js");

class Forget extends ForgetBase {
  constructor(game) {
    super(game, "Forget", "Fifth Edition", "5ED");
  }
}

module.exports = Forget;
