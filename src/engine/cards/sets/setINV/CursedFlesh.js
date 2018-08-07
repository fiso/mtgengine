"use strict";
const Constants = require ("../../../Constants");
const CursedFleshBase = require("../setTPR/CursedFlesh");

class CursedFlesh extends CursedFleshBase {
  constructor (game) {
    super(game, "Cursed Flesh", "Invasion", "INV");
  }
}

module.exports = CursedFlesh;
