"use strict";
const Constants = require ("../../../Constants");
const MirrorEntityBase = require("../setC13/MirrorEntity");

class MirrorEntity extends MirrorEntityBase {
  constructor (game) {
    super(game, "Mirror Entity", "Lorwyn", "LRW");
  }
}

module.exports = MirrorEntity;
