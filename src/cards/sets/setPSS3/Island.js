"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "M19 Standard Showdown", "PSS3");
  }
}

module.exports = Island;
