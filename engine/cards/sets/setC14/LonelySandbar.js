"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LonelySandbarBase = require("../setC13/LonelySandbar.js");

class LonelySandbar extends LonelySandbarBase {
  constructor(game) {
    super(game, "Lonely Sandbar", "Commander 2014", "C14");
  }
}

module.exports = LonelySandbar;
