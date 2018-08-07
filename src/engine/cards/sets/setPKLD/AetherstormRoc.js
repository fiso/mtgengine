"use strict";
const Constants = require ("../../../Constants");
const AetherstormRocBase = require("../setKLD/AetherstormRoc");

class AetherstormRoc extends AetherstormRocBase {
  constructor (game) {
    super(game, "Aetherstorm Roc", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AetherstormRoc;
