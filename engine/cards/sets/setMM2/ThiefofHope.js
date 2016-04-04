"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThiefofHopeBase = require("../setCHK/ThiefofHope.js");

class ThiefofHope extends ThiefofHopeBase {
  constructor(game) {
    super(game, "Thief of Hope", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ThiefofHope;
