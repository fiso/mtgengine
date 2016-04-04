"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlbinoTrollBase = require("../setDD3_GVL/AlbinoTroll.js");

class AlbinoTroll extends AlbinoTrollBase {
  constructor(game) {
    super(game, "Albino Troll", "Friday Night Magic", "pFNM");
  }
}

module.exports = AlbinoTroll;
