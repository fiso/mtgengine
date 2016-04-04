"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WurmcoilEngine extends Card {
  constructor(game) {
    super(game, "Wurmcoil Engine", "Commander 2014", "C14");
  }
}

module.exports = WurmcoilEngine;
