"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PikemenBase = require("../set5ED/Pikemen.js");

class Pikemen extends PikemenBase {
  constructor(game) {
    super(game, "Pikemen", "Fourth Edition", "4ED");
  }
}

module.exports = Pikemen;
