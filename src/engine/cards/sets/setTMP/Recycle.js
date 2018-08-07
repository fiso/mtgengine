"use strict";
const Constants = require ("../../../Constants");
const RecycleBase = require("../setTPR/Recycle");

class Recycle extends RecycleBase {
  constructor (game) {
    super(game, "Recycle", "Tempest", "TMP");
  }
}

module.exports = Recycle;
