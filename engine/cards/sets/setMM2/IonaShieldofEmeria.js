"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IonaShieldofEmeriaBase = require("../setV15/IonaShieldofEmeria.js");

class IonaShieldofEmeria extends IonaShieldofEmeriaBase {
  constructor(game) {
    super(game, "Iona, Shield of Emeria", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = IonaShieldofEmeria;
