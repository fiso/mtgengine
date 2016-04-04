"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BronzeSableBase = require("../setM15/BronzeSable.js");

class BronzeSable extends BronzeSableBase {
  constructor(game) {
    super(game, "Bronze Sable", "Theros", "THS");
  }
}

module.exports = BronzeSable;
