"use strict";
const Constants = require ("../../../Constants");
const MizziumMeddlerBase = require("../setPORI/MizziumMeddler");

class MizziumMeddler extends MizziumMeddlerBase {
  constructor (game) {
    super(game, "Mizzium Meddler", "Magic Origins", "ORI");
  }
}

module.exports = MizziumMeddler;
