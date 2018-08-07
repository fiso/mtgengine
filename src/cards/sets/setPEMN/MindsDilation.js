"use strict";
const Constants = require ("../../../Constants");
const MindsDilationBase = require("../setEMN/MindsDilation");

class MindsDilation extends MindsDilationBase {
  constructor (game) {
    super(game, "Mind's Dilation", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = MindsDilation;
