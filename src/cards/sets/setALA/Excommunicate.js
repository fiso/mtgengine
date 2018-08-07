"use strict";
const Constants = require ("../../../Constants");
const ExcommunicateBase = require("../setM11/Excommunicate");

class Excommunicate extends ExcommunicateBase {
  constructor (game) {
    super(game, "Excommunicate", "Shards of Alara", "ALA");
  }
}

module.exports = Excommunicate;
