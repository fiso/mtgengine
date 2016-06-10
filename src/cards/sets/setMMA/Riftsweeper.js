"use strict";
const Constants = require ("../../../Constants");
const RiftsweeperBase = require("../setFUT/Riftsweeper");

class Riftsweeper extends RiftsweeperBase {
  constructor (game) {
    super(game, "Riftsweeper", "Modern Masters", "MMA");
  }
}

module.exports = Riftsweeper;
