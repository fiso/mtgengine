"use strict";
const Constants = require ("../../../Constants");
const SilverWyvernBase = require("../setTPR/SilverWyvern");

class SilverWyvern extends SilverWyvernBase {
  constructor (game) {
    super(game, "Silver Wyvern", "Stronghold", "STH");
  }
}

module.exports = SilverWyvern;
