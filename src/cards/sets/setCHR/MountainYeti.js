"use strict";
const Constants = require ("../../../Constants");
const MountainYetiBase = require("../setMED/MountainYeti");

class MountainYeti extends MountainYetiBase {
  constructor (game) {
    super(game, "Mountain Yeti", "Chronicles", "CHR");
  }
}

module.exports = MountainYeti;
