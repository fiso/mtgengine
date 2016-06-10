"use strict";
const Constants = require ("../../../Constants");
const HammerheadSharkBase = require("../setSTH/HammerheadShark");

class HammerheadShark extends HammerheadSharkBase {
  constructor (game) {
    super(game, "Hammerhead Shark", "Tempest Remastered", "TPR");
  }
}

module.exports = HammerheadShark;
