"use strict";
const Constants = require ("../../../Constants");
const BomatCourierBase = require("../setKLD/BomatCourier");

class BomatCourier extends BomatCourierBase {
  constructor (game) {
    super(game, "Bomat Courier", "Kaladesh Promos", "PKLD");
  }
}

module.exports = BomatCourier;
