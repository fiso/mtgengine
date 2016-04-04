"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RemandBase = require("../setDDM/Remand.js");

class Remand extends RemandBase {
  constructor(game) {
    super(game, "Remand", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Remand;
