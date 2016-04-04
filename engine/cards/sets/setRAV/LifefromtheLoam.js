"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifefromtheLoamBase = require("../setDDJ/LifefromtheLoam.js");

class LifefromtheLoam extends LifefromtheLoamBase {
  constructor(game) {
    super(game, "Life from the Loam", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LifefromtheLoam;
