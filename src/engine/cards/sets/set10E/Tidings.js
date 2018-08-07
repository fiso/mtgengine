"use strict";
const Constants = require ("../../../Constants");
const TidingsBase = require("../setC18/Tidings");

class Tidings extends TidingsBase {
  constructor (game) {
    super(game, "Tidings", "Tenth Edition", "10E");
  }
}

module.exports = Tidings;
