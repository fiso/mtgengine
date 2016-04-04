"use strict";
const Constants = require ("../../../Constants");
const DiscombobulateBase = require("../setONS/Discombobulate");

class Discombobulate extends DiscombobulateBase {
  constructor(game) {
    super(game, "Discombobulate", "Tenth Edition", "10E");
  }
}

module.exports = Discombobulate;
