"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvoryGiantBase = require("../setMMA/IvoryGiant.js");

class IvoryGiant extends IvoryGiantBase {
  constructor(game) {
    super(game, "Ivory Giant", "Time Spiral", "TSP");
  }
}

module.exports = IvoryGiant;
