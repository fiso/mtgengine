"use strict";
const Constants = require ("../../../Constants");
const InheritanceBase = require("../setME2/Inheritance");

class Inheritance extends InheritanceBase {
  constructor (game) {
    super(game, "Inheritance", "Alliances", "ALL");
  }
}

module.exports = Inheritance;
