"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanCaryatidBase = require("../setpMEI/SylvanCaryatid.js");

class SylvanCaryatid extends SylvanCaryatidBase {
  constructor(game) {
    super(game, "Sylvan Caryatid", "Theros", "THS");
  }
}

module.exports = SylvanCaryatid;
