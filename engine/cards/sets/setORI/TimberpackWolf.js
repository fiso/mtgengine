"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimberpackWolfBase = require("../setM13/TimberpackWolf.js");

class TimberpackWolf extends TimberpackWolfBase {
  constructor(game) {
    super(game, "Timberpack Wolf", "Magic Origins", "ORI");
  }
}

module.exports = TimberpackWolf;
