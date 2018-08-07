"use strict";
const Constants = require ("../../../Constants");
const MirrorEntityBase = require("../setCMA/MirrorEntity");

class MirrorEntity extends MirrorEntityBase {
  constructor (game) {
    super(game, "Mirror Entity", "Modern Masters 2015", "MM2");
  }
}

module.exports = MirrorEntity;
