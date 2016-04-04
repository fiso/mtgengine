"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PikemenBase = require("../set5ED/Pikemen.js");

class Pikemen extends PikemenBase {
  constructor(game) {
    super(game, "Pikemen", "The Dark", "DRK");
  }
}

module.exports = Pikemen;
