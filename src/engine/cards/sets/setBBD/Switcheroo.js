"use strict";
const Constants = require ("../../../Constants");
const SwitcherooBase = require("../setM19/Switcheroo");

class Switcheroo extends SwitcherooBase {
  constructor (game) {
    super(game, "Switcheroo", "Battlebond", "BBD");
  }
}

module.exports = Switcheroo;
