"use strict";
const Constants = require ("../../../Constants");
const LifefromtheLoamBase = require("../setDDJ/LifefromtheLoam");

class LifefromtheLoam extends LifefromtheLoamBase {
  constructor (game) {
    super(game, "Life from the Loam", "Modern Masters", "MMA");
  }
}

module.exports = LifefromtheLoam;
