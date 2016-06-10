"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setCED/Blessing");

class Blessing extends BlessingBase {
  constructor (game) {
    super(game, "Blessing", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Blessing;
