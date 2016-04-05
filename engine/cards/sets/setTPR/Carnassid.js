"use strict";
const Constants = require ("../../../Constants");
const CarnassidBase = require("../setSTH/Carnassid");

class Carnassid extends CarnassidBase {
  constructor(game) {
    super(game, "Carnassid", "Tempest Remastered", "TPR");
  }
}

module.exports = Carnassid;
