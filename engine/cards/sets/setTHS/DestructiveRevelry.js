"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DestructiveRevelryBase = require("../setDDL/DestructiveRevelry.js");

class DestructiveRevelry extends DestructiveRevelryBase {
  constructor(game) {
    super(game, "Destructive Revelry", "Theros", "THS");
  }
}

module.exports = DestructiveRevelry;
