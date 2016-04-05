"use strict";
const Constants = require ("../../../Constants");
const IndestructibilityBase = require("../setM10/Indestructibility");

class Indestructibility extends IndestructibilityBase {
  constructor(game) {
    super(game, "Indestructibility", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Indestructibility;
