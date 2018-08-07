"use strict";
const Constants = require ("../../../Constants");
const TaigamSidisisHandBase = require("../setC17/TaigamSidisisHand");

class TaigamSidisisHand extends TaigamSidisisHandBase {
  constructor (game) {
    super(game, "Taigam, Sidisi's Hand", "You Make the Cube", "PZ2");
  }
}

module.exports = TaigamSidisisHand;
