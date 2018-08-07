"use strict";
const Constants = require ("../../../Constants");
const MirrorMatchBase = require("../setPZ1/MirrorMatch");

class MirrorMatch extends MirrorMatchBase {
  constructor (game) {
    super(game, "Mirror Match", "Commander 2015", "C15");
  }
}

module.exports = MirrorMatch;
