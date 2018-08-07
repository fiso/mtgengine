"use strict";
const Constants = require ("../../../Constants");
const ChorusofWoeBase = require("../setS99/ChorusofWoe");

class ChorusofWoe extends ChorusofWoeBase {
  constructor (game) {
    super(game, "Chorus of Woe", "Portal Second Age", "P02");
  }
}

module.exports = ChorusofWoe;
