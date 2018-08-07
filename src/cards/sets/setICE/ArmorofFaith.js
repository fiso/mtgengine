"use strict";
const Constants = require ("../../../Constants");
const ArmorofFaithBase = require("../setME2/ArmorofFaith");

class ArmorofFaith extends ArmorofFaithBase {
  constructor (game) {
    super(game, "Armor of Faith", "Ice Age", "ICE");
  }
}

module.exports = ArmorofFaith;
