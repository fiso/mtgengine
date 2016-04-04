"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraAviaryBase = require("../setHML/SerraAviary.js");

class SerraAviary extends SerraAviaryBase {
  constructor(game) {
    super(game, "Serra Aviary", "Masters Edition IV", "ME4");
  }
}

module.exports = SerraAviary;
