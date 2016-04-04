"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterBasiliskBase = require("../setM11/GreaterBasilisk.js");

class GreaterBasilisk extends GreaterBasiliskBase {
  constructor(game) {
    super(game, "Greater Basilisk", "Magic 2012", "M12");
  }
}

module.exports = GreaterBasilisk;
