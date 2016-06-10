"use strict";
const Constants = require ("../../../Constants");
const ArmorofFaithBase = require("../set5ED/ArmorofFaith");

class ArmorofFaith extends ArmorofFaithBase {
  constructor (game) {
    super(game, "Armor of Faith", "Masters Edition II", "ME2");
  }
}

module.exports = ArmorofFaith;
