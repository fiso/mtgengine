"use strict";
const Constants = require ("../../../Constants");
const MortarpodBase = require("../setMBS/Mortarpod");

class Mortarpod extends MortarpodBase {
  constructor (game) {
    super(game, "Mortarpod", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Mortarpod;
