"use strict";
const Constants = require ("../../../Constants");
const BronzeSableBase = require("../setCN2/BronzeSable");

class BronzeSable extends BronzeSableBase {
  constructor (game) {
    super(game, "Bronze Sable", "Theros", "THS");
  }
}

module.exports = BronzeSable;
