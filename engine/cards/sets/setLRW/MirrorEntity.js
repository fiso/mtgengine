"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirrorEntityBase = require("../setC13/MirrorEntity.js");

class MirrorEntity extends MirrorEntityBase {
  constructor(game) {
    super(game, "Mirror Entity", "Lorwyn", "LRW");
  }
}

module.exports = MirrorEntity;
