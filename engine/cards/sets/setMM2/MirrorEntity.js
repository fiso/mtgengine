"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirrorEntityBase = require("../setC13/MirrorEntity.js");

class MirrorEntity extends MirrorEntityBase {
  constructor(game) {
    super(game, "Mirror Entity", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MirrorEntity;
