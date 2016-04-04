"use strict";
const Constants = require ("../../../Constants");
const LifefromtheLoamBase = require("../setDDJ/LifefromtheLoam");

class LifefromtheLoam extends LifefromtheLoamBase {
  constructor(game) {
    super(game, "Life from the Loam", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LifefromtheLoam;
