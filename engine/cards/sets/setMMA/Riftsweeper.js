"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiftsweeperBase = require("../setFUT/Riftsweeper.js");

class Riftsweeper extends RiftsweeperBase {
  constructor(game) {
    super(game, "Riftsweeper", "Modern Masters", "MMA");
  }
}

module.exports = Riftsweeper;
