"use strict";
const Constants = require ("../../../Constants");
const DancingScimitarBase = require("../setARN/DancingScimitar");

class DancingScimitar extends DancingScimitarBase {
  constructor (game) {
    super(game, "Dancing Scimitar", "Ninth Edition", "9ED");
  }
}

module.exports = DancingScimitar;
