"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireHoundsBase = require("../setEXO/VampireHounds.js");

class VampireHounds extends VampireHoundsBase {
  constructor(game) {
    super(game, "Vampire Hounds", "Tempest Remastered", "TPR");
  }
}

module.exports = VampireHounds;
