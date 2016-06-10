"use strict";
const Constants = require ("../../../Constants");
const MountainYetiBase = require("../setCHR/MountainYeti");

class MountainYeti extends MountainYetiBase {
  constructor (game) {
    super(game, "Mountain Yeti", "Masters Edition", "MED");
  }
}

module.exports = MountainYeti;
