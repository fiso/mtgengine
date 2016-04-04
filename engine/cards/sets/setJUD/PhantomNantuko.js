"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomNantukoBase = require("../setC13/PhantomNantuko.js");

class PhantomNantuko extends PhantomNantukoBase {
  constructor(game) {
    super(game, "Phantom Nantuko", "Judgment", "JUD");
  }
}

module.exports = PhantomNantuko;
