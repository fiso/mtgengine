"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoyagerStaff extends Card {
  constructor(game) {
    super(game, "Voyager Staff", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VoyagerStaff;
