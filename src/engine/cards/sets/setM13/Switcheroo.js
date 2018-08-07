"use strict";
const Constants = require ("../../../Constants");
const SwitcherooBase = require("../setM19/Switcheroo");

class Switcheroo extends SwitcherooBase {
  constructor (game) {
    super(game, "Switcheroo", "Magic 2013", "M13");
  }
}

module.exports = Switcheroo;
