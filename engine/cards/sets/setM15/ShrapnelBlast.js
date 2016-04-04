"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrapnelBlastBase = require("../setpFNM/ShrapnelBlast.js");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor(game) {
    super(game, "Shrapnel Blast", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ShrapnelBlast;
