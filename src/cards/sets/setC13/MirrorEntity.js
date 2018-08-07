"use strict";
const Constants = require ("../../../Constants");
const MirrorEntityBase = require("../setCMA/MirrorEntity");

class MirrorEntity extends MirrorEntityBase {
  constructor (game) {
    super(game, "Mirror Entity", "Commander 2013", "C13");
  }
}

module.exports = MirrorEntity;
