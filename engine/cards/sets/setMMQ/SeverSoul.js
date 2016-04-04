"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeverSoulBase = require("../set8ED/SeverSoul.js");

class SeverSoul extends SeverSoulBase {
  constructor(game) {
    super(game, "Sever Soul", "Mercadian Masques", "MMQ");
  }
}

module.exports = SeverSoul;
