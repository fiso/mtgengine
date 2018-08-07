"use strict";
const Constants = require ("../../../Constants");
const MarchesasDecreeBase = require("../setPZ2/MarchesasDecree");

class MarchesasDecree extends MarchesasDecreeBase {
  constructor (game) {
    super(game, "Marchesa's Decree", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = MarchesasDecree;
