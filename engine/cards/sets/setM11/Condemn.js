"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CondemnBase = require("../setC14/Condemn.js");

class Condemn extends CondemnBase {
  constructor(game) {
    super(game, "Condemn", "Magic 2011", "M11");
  }
}

module.exports = Condemn;
