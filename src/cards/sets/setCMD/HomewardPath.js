"use strict";
const Constants = require ("../../../Constants");
const HomewardPathBase = require("../setJ17/HomewardPath");

class HomewardPath extends HomewardPathBase {
  constructor (game) {
    super(game, "Homeward Path", "Commander 2011", "CMD");
  }
}

module.exports = HomewardPath;
