"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerheadSharkBase = require("../setSTH/HammerheadShark.js");

class HammerheadShark extends HammerheadSharkBase {
  constructor(game) {
    super(game, "Hammerhead Shark", "Tempest Remastered", "TPR");
  }
}

module.exports = HammerheadShark;
