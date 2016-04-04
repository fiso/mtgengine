"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrosavantBase = require("../set6ED/Necrosavant.js");

class Necrosavant extends NecrosavantBase {
  constructor(game) {
    super(game, "Necrosavant", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Necrosavant;
