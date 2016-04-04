"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoomsdayBase = require("../set6ED/Doomsday.js");

class Doomsday extends DoomsdayBase {
  constructor(game) {
    super(game, "Doomsday", "Weatherlight", "WTH");
  }
}

module.exports = Doomsday;
