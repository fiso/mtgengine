"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderstaffBase = require("../setARC/Thunderstaff.js");

class Thunderstaff extends ThunderstaffBase {
  constructor(game) {
    super(game, "Thunderstaff", "Commander 2013 Edition", "C13");
  }
}

module.exports = Thunderstaff;
