"use strict";
const Constants = require ("../../../Constants");
const IndestructibilityBase = require("../setM14/Indestructibility");

class Indestructibility extends IndestructibilityBase {
  constructor (game) {
    super(game, "Indestructibility", "Magic 2010", "M10");
  }
}

module.exports = Indestructibility;
