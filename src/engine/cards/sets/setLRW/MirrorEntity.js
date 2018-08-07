"use strict";
const Constants = require ("../../../Constants");
const MirrorEntityBase = require("../setCMA/MirrorEntity");

class MirrorEntity extends MirrorEntityBase {
  constructor (game) {
    super(game, "Mirror Entity", "Lorwyn", "LRW");
  }
}

module.exports = MirrorEntity;
