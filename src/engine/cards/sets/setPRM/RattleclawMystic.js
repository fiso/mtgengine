"use strict";
const Constants = require ("../../../Constants");
const RattleclawMysticBase = require("../setKTK/RattleclawMystic");

class RattleclawMystic extends RattleclawMysticBase {
  constructor (game) {
    super(game, "Rattleclaw Mystic", "Magic Online Promos", "PRM");
  }
}

module.exports = RattleclawMystic;
