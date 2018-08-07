"use strict";
const Constants = require ("../../../Constants");
const ThiefofBloodBase = require("../setCMA/ThiefofBlood");

class ThiefofBlood extends ThiefofBloodBase {
  constructor (game) {
    super(game, "Thief of Blood", "Legendary Cube", "PZ1");
  }
}

module.exports = ThiefofBlood;
