"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RangersGuileBase = require("../setISD/RangersGuile.js");

class RangersGuile extends RangersGuileBase {
  constructor(game) {
    super(game, "Ranger's Guile", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RangersGuile;
