"use strict";
const Constants = require ("../../../Constants");
const DeadshotBase = require("../setTMP/Deadshot");

class Deadshot extends DeadshotBase {
  constructor(game) {
    super(game, "Deadshot", "Tempest Remastered", "TPR");
  }
}

module.exports = Deadshot;
