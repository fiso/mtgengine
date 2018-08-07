"use strict";
const Constants = require ("../../../Constants");
const HammerheadSharkBase = require("../setTPR/HammerheadShark");

class HammerheadShark extends HammerheadSharkBase {
  constructor (game) {
    super(game, "Hammerhead Shark", "Stronghold", "STH");
  }
}

module.exports = HammerheadShark;
