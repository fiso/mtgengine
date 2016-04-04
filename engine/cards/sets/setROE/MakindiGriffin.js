"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MakindiGriffinBase = require("../setDDP/MakindiGriffin.js");

class MakindiGriffin extends MakindiGriffinBase {
  constructor(game) {
    super(game, "Makindi Griffin", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MakindiGriffin;
