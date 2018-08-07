"use strict";
const Constants = require ("../../../Constants");
const PhyrexianPlaguelordBase = require("../setCMA/PhyrexianPlaguelord");

class PhyrexianPlaguelord extends PhyrexianPlaguelordBase {
  constructor (game) {
    super(game, "Phyrexian Plaguelord", "Eighth Edition", "8ED");
  }
}

module.exports = PhyrexianPlaguelord;
