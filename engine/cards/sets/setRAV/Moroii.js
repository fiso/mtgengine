"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoroiiBase = require("../setDDH/Moroii.js");

class Moroii extends MoroiiBase {
  constructor(game) {
    super(game, "Moroii", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Moroii;
