"use strict";
const Constants = require ("../../../Constants");
const FirespoutBase = require("../setPZ1/Firespout");

class Firespout extends FirespoutBase {
  constructor (game) {
    super(game, "Firespout", "Commander 2011", "CMD");
  }
}

module.exports = Firespout;
