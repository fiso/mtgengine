"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SizzleBase = require("../set8ED/Sizzle.js");

class Sizzle extends SizzleBase {
  constructor(game) {
    super(game, "Sizzle", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sizzle;
