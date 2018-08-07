"use strict";
const Constants = require ("../../../Constants");
const BenthicGiantBase = require("../setBBD/BenthicGiant");

class BenthicGiant extends BenthicGiantBase {
  constructor (game) {
    super(game, "Benthic Giant", "Theros", "THS");
  }
}

module.exports = BenthicGiant;
