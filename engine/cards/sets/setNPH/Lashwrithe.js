"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LashwritheBase = require("../setC14/Lashwrithe.js");

class Lashwrithe extends LashwritheBase {
  constructor(game) {
    super(game, "Lashwrithe", "New Phyrexia", "NPH");
  }
}

module.exports = Lashwrithe;
