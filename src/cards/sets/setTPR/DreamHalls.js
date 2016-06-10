"use strict";
const Constants = require ("../../../Constants");
const DreamHallsBase = require("../setSTH/DreamHalls");

class DreamHalls extends DreamHallsBase {
  constructor (game) {
    super(game, "Dream Halls", "Tempest Remastered", "TPR");
  }
}

module.exports = DreamHalls;
