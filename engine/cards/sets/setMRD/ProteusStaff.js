"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProteusStaff extends Card {
  constructor(game) {
    super(game, "Proteus Staff", "Mirrodin", "MRD");
  }
}

module.exports = ProteusStaff;
