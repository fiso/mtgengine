"use strict";
const Constants = require ("../../../Constants");
const MoggManiacBase = require("../setSTH/MoggManiac");

class MoggManiac extends MoggManiacBase {
  constructor(game) {
    super(game, "Mogg Maniac", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggManiac;
