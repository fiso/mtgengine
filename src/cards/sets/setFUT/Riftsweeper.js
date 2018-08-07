"use strict";
const Constants = require ("../../../Constants");
const RiftsweeperBase = require("../setMMA/Riftsweeper");

class Riftsweeper extends RiftsweeperBase {
  constructor (game) {
    super(game, "Riftsweeper", "Future Sight", "FUT");
  }
}

module.exports = Riftsweeper;
