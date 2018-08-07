"use strict";
const Constants = require ("../../../Constants");
const MirageMirrorBase = require("../setHOU/MirageMirror");

class MirageMirror extends MirageMirrorBase {
  constructor (game) {
    super(game, "Mirage Mirror", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = MirageMirror;
