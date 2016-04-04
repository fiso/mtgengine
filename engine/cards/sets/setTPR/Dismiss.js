"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setpARL/Dismiss");

class Dismiss extends DismissBase {
  constructor(game) {
    super(game, "Dismiss", "Tempest Remastered", "TPR");
  }
}

module.exports = Dismiss;
