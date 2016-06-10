"use strict";
const Constants = require ("../../../Constants");
const DanceofManyBase = require("../setCHR/DanceofMany");

class DanceofMany extends DanceofManyBase {
  constructor (game) {
    super(game, "Dance of Many", "The Dark", "DRK");
  }
}

module.exports = DanceofMany;
