"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setCED/Blessing");

class Blessing extends BlessingBase {
  constructor(game) {
    super(game, "Blessing", "Unlimited Edition", "2ED");
  }
}

module.exports = Blessing;
