"use strict";
const Constants = require ("../../../Constants");
const MountainYetiBase = require("../setCHR/MountainYeti");

class MountainYeti extends MountainYetiBase {
  constructor (game) {
    super(game, "Mountain Yeti", "Legends", "LEG");
  }
}

module.exports = MountainYeti;
