"use strict";
const Constants = require ("../../../Constants");
const DancingScimitarBase = require("../set9ED/DancingScimitar");

class DancingScimitar extends DancingScimitarBase {
  constructor (game) {
    super(game, "Dancing Scimitar", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DancingScimitar;
