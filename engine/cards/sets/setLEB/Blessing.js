"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlessingBase = require("../setCED/Blessing.js");

class Blessing extends BlessingBase {
  constructor(game) {
    super(game, "Blessing", "Limited Edition Beta", "LEB");
  }
}

module.exports = Blessing;
