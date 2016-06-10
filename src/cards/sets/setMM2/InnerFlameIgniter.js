"use strict";
const Constants = require ("../../../Constants");
const InnerFlameIgniterBase = require("../setLRW/InnerFlameIgniter");

class InnerFlameIgniter extends InnerFlameIgniterBase {
  constructor (game) {
    super(game, "Inner-Flame Igniter", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = InnerFlameIgniter;
