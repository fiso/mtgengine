"use strict";
const Constants = require ("../../../Constants");
const ConfiscationCoupBase = require("../setKLD/ConfiscationCoup");

class ConfiscationCoup extends ConfiscationCoupBase {
  constructor (game) {
    super(game, "Confiscation Coup", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ConfiscationCoup;
