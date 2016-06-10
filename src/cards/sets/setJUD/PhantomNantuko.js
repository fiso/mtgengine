"use strict";
const Constants = require ("../../../Constants");
const PhantomNantukoBase = require("../setC13/PhantomNantuko");

class PhantomNantuko extends PhantomNantukoBase {
  constructor (game) {
    super(game, "Phantom Nantuko", "Judgment", "JUD");
  }
}

module.exports = PhantomNantuko;
