"use strict";
const Constants = require ("../../../Constants");
const ExcommunicateBase = require("../setM11/Excommunicate");

class Excommunicate extends ExcommunicateBase {
  constructor (game) {
    super(game, "Excommunicate", "Magic 2010", "M10");
  }
}

module.exports = Excommunicate;
