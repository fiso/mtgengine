"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InheritanceBase = require("../setALL/Inheritance.js");

class Inheritance extends InheritanceBase {
  constructor(game) {
    super(game, "Inheritance", "Masters Edition II", "ME2");
  }
}

module.exports = Inheritance;
