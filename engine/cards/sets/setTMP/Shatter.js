"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShatterBase = require("../set6ED/Shatter.js");

class Shatter extends ShatterBase {
  constructor(game) {
    super(game, "Shatter", "Tempest", "TMP");
  }
}

module.exports = Shatter;
