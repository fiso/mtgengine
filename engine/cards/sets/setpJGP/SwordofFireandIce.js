"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofFireandIceBase = require("../setDST/SwordofFireandIce.js");

class SwordofFireandIce extends SwordofFireandIceBase {
  constructor(game) {
    super(game, "Sword of Fire and Ice", "Judge Gift Program", "pJGP");
  }
}

module.exports = SwordofFireandIce;
