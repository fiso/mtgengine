"use strict";
const Constants = require ("../../../Constants");
const RangersGuileBase = require("../setM15/RangersGuile");

class RangersGuile extends RangersGuileBase {
  constructor (game) {
    super(game, "Ranger's Guile", "Magic 2014", "M14");
  }
}

module.exports = RangersGuile;
