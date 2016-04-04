"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExcommunicateBase = require("../setM10/Excommunicate.js");

class Excommunicate extends ExcommunicateBase {
  constructor(game) {
    super(game, "Excommunicate", "Magic 2011", "M11");
  }
}

module.exports = Excommunicate;
