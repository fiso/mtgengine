"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setCED/Blessing");

class Blessing extends BlessingBase {
  constructor(game) {
    super(game, "Blessing", "Fourth Edition", "4ED");
  }
}

module.exports = Blessing;
