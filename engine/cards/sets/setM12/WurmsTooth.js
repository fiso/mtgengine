"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WurmsToothBase = require("../setDST/WurmsTooth.js");

class WurmsTooth extends WurmsToothBase {
  constructor(game) {
    super(game, "Wurm's Tooth", "Magic 2012", "M12");
  }
}

module.exports = WurmsTooth;
