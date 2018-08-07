"use strict";
const Constants = require ("../../../Constants");
const EpicProportionsBase = require("../setC18/EpicProportions");

class EpicProportions extends EpicProportionsBase {
  constructor (game) {
    super(game, "Epic Proportions", "Lorwyn", "LRW");
  }
}

module.exports = EpicProportions;
