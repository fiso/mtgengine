"use strict";
const Constants = require ("../../../Constants");
const KezzerdrixBase = require("../setTMP/Kezzerdrix");

class Kezzerdrix extends KezzerdrixBase {
  constructor (game) {
    super(game, "Kezzerdrix", "Tempest Remastered", "TPR");
  }
}

module.exports = Kezzerdrix;
