"use strict";
const Constants = require ("../../../Constants");
const IvoryGiantBase = require("../setMMA/IvoryGiant");

class IvoryGiant extends IvoryGiantBase {
  constructor(game) {
    super(game, "Ivory Giant", "Time Spiral", "TSP");
  }
}

module.exports = IvoryGiant;
