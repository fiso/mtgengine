"use strict";
const Constants = require ("../../../Constants");
const PhantomTigerBase = require("../setIMA/PhantomTiger");

class PhantomTiger extends PhantomTigerBase {
  constructor (game) {
    super(game, "Phantom Tiger", "Judgment", "JUD");
  }
}

module.exports = PhantomTiger;
