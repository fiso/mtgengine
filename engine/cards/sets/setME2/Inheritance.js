"use strict";
const Constants = require ("../../../Constants");
const InheritanceBase = require("../setALL/Inheritance");

class Inheritance extends InheritanceBase {
  constructor(game) {
    super(game, "Inheritance", "Masters Edition II", "ME2");
  }
}

module.exports = Inheritance;
