"use strict";
const Constants = require ("../../../Constants");
const CursedFleshBase = require("../setEXO/CursedFlesh");

class CursedFlesh extends CursedFleshBase {
  constructor(game) {
    super(game, "Cursed Flesh", "Tempest Remastered", "TPR");
  }
}

module.exports = CursedFlesh;
