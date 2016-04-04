"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BacktoNatureBase = require("../setM11/BacktoNature.js");

class BacktoNature extends BacktoNatureBase {
  constructor(game) {
    super(game, "Back to Nature", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BacktoNature;
