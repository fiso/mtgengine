"use strict";
const Constants = require ("../../../Constants");
const HomewardPathBase = require("../setJ17/HomewardPath");

class HomewardPath extends HomewardPathBase {
  constructor (game) {
    super(game, "Homeward Path", "Legendary Cube", "PZ1");
  }
}

module.exports = HomewardPath;
