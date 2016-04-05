"use strict";
const Constants = require ("../../../Constants");
const IonaShieldofEmeriaBase = require("../setV15/IonaShieldofEmeria");

class IonaShieldofEmeria extends IonaShieldofEmeriaBase {
  constructor(game) {
    super(game, "Iona, Shield of Emeria", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = IonaShieldofEmeria;
