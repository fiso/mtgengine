"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnuffOutBase = require("../setDD3_GVL/SnuffOut.js");

class SnuffOut extends SnuffOutBase {
  constructor(game) {
    super(game, "Snuff Out", "Mercadian Masques", "MMQ");
  }
}

module.exports = SnuffOut;
