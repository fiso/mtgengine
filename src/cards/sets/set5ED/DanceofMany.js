"use strict";
const Constants = require ("../../../Constants");
const DanceofManyBase = require("../setCHR/DanceofMany");

class DanceofMany extends DanceofManyBase {
  constructor(game) {
    super(game, "Dance of Many", "Fifth Edition", "5ED");
  }
}

module.exports = DanceofMany;
