"use strict";
const Constants = require ("../../../Constants");
const PlatedRootwallaBase = require("../setBRB/PlatedRootwalla");

class PlatedRootwalla extends PlatedRootwallaBase {
  constructor (game) {
    super(game, "Plated Rootwalla", "Exodus", "EXO");
  }
}

module.exports = PlatedRootwalla;
