"use strict";
const Constants = require ("../../../Constants");
const MirrorEntityBase = require("../setC13/MirrorEntity");

class MirrorEntity extends MirrorEntityBase {
  constructor (game) {
    super(game, "Mirror Entity", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MirrorEntity;
