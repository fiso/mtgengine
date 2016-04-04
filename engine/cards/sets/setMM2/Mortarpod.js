"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MortarpodBase = require("../setMBS/Mortarpod.js");

class Mortarpod extends MortarpodBase {
  constructor(game) {
    super(game, "Mortarpod", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Mortarpod;
