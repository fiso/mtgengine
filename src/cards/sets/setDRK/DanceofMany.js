"use strict";
const Constants = require ("../../../Constants");
const DanceofManyBase = require("../setME3/DanceofMany");

class DanceofMany extends DanceofManyBase {
  constructor (game) {
    super(game, "Dance of Many", "The Dark", "DRK");
  }
}

module.exports = DanceofMany;
