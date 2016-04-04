"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UncontrollableAngerBase = require("../setCHK/UncontrollableAnger.js");

class UncontrollableAnger extends UncontrollableAngerBase {
  constructor(game) {
    super(game, "Uncontrollable Anger", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = UncontrollableAnger;
