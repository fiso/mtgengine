"use strict";
const Constants = require ("../../../Constants");
const ShatterBase = require("../setRIX/Shatter");

class Shatter extends ShatterBase {
  constructor (game) {
    super(game, "Shatter", "Magic 2010", "M10");
  }
}

module.exports = Shatter;
