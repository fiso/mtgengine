"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HomewardPathBase = require("../setC13/HomewardPath.js");

class HomewardPath extends HomewardPathBase {
  constructor(game) {
    super(game, "Homeward Path", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HomewardPath;
