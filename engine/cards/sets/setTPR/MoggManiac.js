"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggManiacBase = require("../setSTH/MoggManiac.js");

class MoggManiac extends MoggManiacBase {
  constructor(game) {
    super(game, "Mogg Maniac", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggManiac;
