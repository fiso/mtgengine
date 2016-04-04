"use strict";
const Constants = require ("../../../Constants");
const ShatterBase = require("../set6ED/Shatter");

class Shatter extends ShatterBase {
  constructor(game) {
    super(game, "Shatter", "Fifth Edition", "5ED");
  }
}

module.exports = Shatter;
